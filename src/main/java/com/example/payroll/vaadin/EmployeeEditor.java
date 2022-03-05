package com.example.payroll.vaadin;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.payroll.model.Employee;
import com.example.payroll.repository.EmployeeRepository;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.KeyNotifier;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.data.converter.StringToIntegerConverter;
import com.vaadin.flow.spring.annotation.SpringComponent;
import com.vaadin.flow.spring.annotation.UIScope;

/**
 * A simple example to introduce building forms. As your real application is
 * probably much more complicated than this example, you could re-use this form
 * in multiple places. This example component is only used in MainView.
 * <p>
 * In a real world application you'll most likely using a common super class for
 * all your forms - less code, better UX.
 */
@SpringComponent
@UIScope
public class EmployeeEditor extends VerticalLayout implements KeyNotifier {

	private final EmployeeRepository repository;

	// The currently edited employee
	private Employee employee;

	// Fields to edit properties in Employee entity
	TextField profileImage = new TextField("Profile Image URL");
	TextField firstName = new TextField("First Name");
	TextField lastName = new TextField("Last Name");
	TextField email = new TextField("E-mail");
	TextField salary = new TextField("Salary ($)");

	// Action buttons
	Button save = new Button("Save", VaadinIcon.CHECK.create());
	Button cancel = new Button("Cancel");
	Button delete = new Button("Delete", VaadinIcon.TRASH.create());
	HorizontalLayout actions = new HorizontalLayout(save, cancel, delete);

	Binder<Employee> binder = new Binder<>(Employee.class);
	private ChangeHandler changeHandler;

	@Autowired
	public EmployeeEditor(EmployeeRepository repository) {
		this.repository = repository;

		add(profileImage, firstName, lastName, email, salary, actions);

		binder.forField(salary).withConverter(new StringToIntegerConverter("must be integer")).bind(Employee::getSalary,
				Employee::setSalary);
		binder.readBean(employee);

		// bind using naming convention
		binder.bindInstanceFields(this);

		// Configure and style components
		setSpacing(true);

		save.getElement().getThemeList().add("primary");
		delete.getElement().getThemeList().add("error");

		addKeyPressListener(Key.ENTER, e -> save());

		// wire action buttons to save, delete and reset
		save.addClickListener(e -> save());
		delete.addClickListener(e -> delete());
		cancel.addClickListener(e -> editEmployee(employee));
		setVisible(false);
	}

	void delete() {
		repository.delete(employee);
		changeHandler.onChange();
	}

	void save() {
		repository.save(employee);
		changeHandler.onChange();
	}

	public interface ChangeHandler {
		void onChange();
	}

	public final void editEmployee(Employee e) {
		if (e == null) {
			setVisible(false);
			return;
		}
		final boolean persisted = e.getId() != null;
		if (persisted) {
			// Find fresh entity for editing
			employee = repository.findById(e.getId()).get();
		} else {
			employee = e;
		}
		cancel.setVisible(persisted);

		// Bind employee properties to similarly named fields
		// Could also use annotation or "manual binding" or programmatically
		// moving values from fields to entities before saving
		binder.setBean(employee);

		setVisible(true);

		// Focus first name initially
		firstName.focus();
	}

	public void setChangeHandler(ChangeHandler h) {
		// ChangeHandler is notified when either save or delete
		// is clicked
		changeHandler = h;
	}

}
