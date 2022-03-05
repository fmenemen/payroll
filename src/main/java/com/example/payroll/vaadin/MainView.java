package com.example.payroll.vaadin;

import java.util.Arrays;
import java.util.stream.Stream;

import org.springframework.data.domain.PageRequest;
import org.springframework.util.ObjectUtils;

import com.example.payroll.model.Employee;
import com.example.payroll.repository.EmployeeRepository;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.provider.Query;
import com.vaadin.flow.data.provider.QuerySortOrder;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.spring.data.VaadinSpringDataHelpers;

@Tag("sa-main-view")
@Route(value = MainView.ROUTE)
@PageTitle("Main")
public class MainView extends VerticalLayout {
	public static final String ROUTE = "";
	private final EmployeeRepository repo;
	private final EmployeeEditor editor;
	final Grid<Employee> grid;
	final TextField filter;
	private final Button addNewBtn;

	public MainView(EmployeeRepository repo, EmployeeEditor editor) {
		// Initialize fields
		this.repo = repo;
		this.editor = editor;
		this.grid = new Grid<>(Employee.class);
		this.filter = new TextField();
		this.addNewBtn = new Button("New employee", VaadinIcon.PLUS.create());

		// Create layout
		HorizontalLayout actions = new HorizontalLayout(filter, addNewBtn);
		grid.setHeight("300px");
		grid.setColumns("id");
		grid.getColumnByKey("id").setWidth("100px").setFlexGrow(0);
		grid.getColumnByKey("id")
				.setSortOrderProvider(direction -> Arrays.asList(new QuerySortOrder("id", direction)).stream());

		grid.addComponentColumn(this::getThumbnail).setHeader("Image").setKey("profileImage");
		grid.getColumnByKey("profileImage").setWidth("100px").setFlexGrow(0);
		grid.addColumns("firstName", "lastName", "email", "salary");
		grid.getColumnByKey("salary").setHeader("Salary ($)");
		add(actions, grid, editor);
		filter.setPlaceholder("Filter by first name");

		// Replace listing with filtered content when user changes filter
		filter.setValueChangeMode(ValueChangeMode.EAGER);
		filter.addValueChangeListener(e -> listEmployees(e.getValue()));

		// Connect selected Employee to editor or hide if none is selected
		grid.asSingleSelect().addValueChangeListener(e -> {
			editor.editEmployee(e.getValue());
		});

		// Instantiate and edit a new Employee when the new button is clicked
		Employee newEmployee = new Employee();
		newEmployee.setProfileImage("");
		newEmployee.setFirstName("");
		newEmployee.setLastName("");
		newEmployee.setEmail("");
		newEmployee.setSalary(0);
		addNewBtn.addClickListener(e -> this.editor.editEmployee(newEmployee));

		// Listen changes made by the editor, refresh data from backend
		this.editor.setChangeHandler(() -> {
			this.editor.setVisible(false);
			listEmployees(filter.getValue());
		});

		// Initialize listing
		listEmployees(null);
	}

	private Image getThumbnail(Employee employee) {
		var image = new Image(employee.getProfileImage(), "Employee profile image");
		image.setHeight("40px");
		image.addClickListener(event -> showFullProfileImage(employee));
		return image;
	}

	private void showFullProfileImage(Employee employee) {
		var image = new Image(employee.getProfileImage(), "Profile Image");
		image.setSizeFull();
		var dialog = new Dialog(image);
		dialog.setHeight("90%");
		dialog.open();
	}

	private void listEmployees(String filterText) {
		if (ObjectUtils.isEmpty(filterText)) {
			grid.setItems(query -> getCurrentPageEmployees(query));
		} else {
			grid.setItems(repo.findByFirstNameStartsWithIgnoreCase(filterText));
		}
	}

	private Stream<Employee> getCurrentPageEmployees(Query<Employee, Void> query) {
		return repo.findAll(
				PageRequest.of(query.getPage(), query.getPageSize(), VaadinSpringDataHelpers.toSpringDataSort(query)))
				.getContent().stream();
	}

}
