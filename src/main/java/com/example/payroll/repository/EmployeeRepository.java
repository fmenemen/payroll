package com.example.payroll.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.payroll.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	List<Employee> findByFirstNameStartsWithIgnoreCase(String firstName);
}
