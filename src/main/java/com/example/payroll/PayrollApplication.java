package com.example.payroll;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;

import org.apache.commons.lang3.time.StopWatch;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;
import org.springframework.context.annotation.Bean;

import com.example.payroll.model.Employee;
import com.example.payroll.repository.EmployeeRepository;
import com.vaadin.exampledata.DataType;
import com.vaadin.exampledata.ExampleDataGenerator;

@SpringBootApplication(exclude = ErrorMvcAutoConfiguration.class)
public class PayrollApplication {

	private static final Logger logger = LoggerFactory.getLogger(PayrollApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(PayrollApplication.class, args);
	}

	@Bean
	public CommandLineRunner precreateDataIfNeeded(EmployeeRepository repo) {
		return args -> {
			if (repo.count() == 0) {
				var generator = new ExampleDataGenerator<>(Employee.class, LocalDateTime.now());
				generator.setData(Employee::setProfileImage, DataType.PROFILE_PICTURE_URL);
				generator.setData(Employee::setFirstName, DataType.FIRST_NAME);
				generator.setData(Employee::setLastName, DataType.LAST_NAME);
				generator.setData(Employee::setEmail, DataType.EMAIL);
				generator.setData(Employee::setSalary, DataType.AMOUNT_OF_MONEY);
				var stopWatch = new StopWatch();
				stopWatch.start();
				List<Employee> employees = generator.create(100, new Random().nextInt());
				repo.saveAll(employees);
				stopWatch.stop();
				logger.info("Data generated and added in the database in " + stopWatch.getTime() + "ms.");
			}
		};
	}

}
