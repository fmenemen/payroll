package com.example.payroll.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

import lombok.Data;

@Data
@Entity
public class Employee {

	private @Id @GeneratedValue Long id;
	@Lob
	private String profileImage;
	private String firstName;
	private String lastName;
	private String email;
	private Integer salary;

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}

		if (!(obj instanceof Employee)) {
			return false;
		}
		Employee employee = (Employee) obj;
		return Objects.equals(this.id, employee.id) && Objects.equals(this.firstName, employee.firstName)
				&& Objects.equals(this.lastName, employee.lastName);
	}

	@Override
	public int hashCode() {
		return Objects.hash(this.id, this.firstName, this.lastName);
	}

	@Override
	public String toString() {
		return "Employee{id=" + this.id + ", firstName='" + this.firstName + "', lastName='" + this.lastName
				+ "', e-mail='" + this.email + "', salary=$'" + this.salary + "'}";
	}

}
