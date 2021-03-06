### DESCRIPTION
Simple application that allows the creation and editing of employees with profile and payroll information. The backend is set up using Spring Boot. Spring is used with JPA and a MySQL database to store the employees. In addition, simplified Spring Security is used to provide user login. Note: To simplify things and focus on other parts of the code, the credentials for MySQL and Spring Security logins are saved as plain text in this app but this is never a good idea in a real application.

In the frontend, Vaadin is used to display the database employee information (such as salary and profile images) in a grid as well as providing UI components for the CRUD employee operations. When the application runs, a login Vaadin view is presented and after successful authentication, a redirect to the main Vaadin view with the payroll information takes place. Vaadin example data is used to generate test data when running the project with an empty database. Lazy-loading of the employees is also applied when scrolling down the grid containing employee data.

### INSTALLATION
Tested with openjdk 16.0.1 and mysql 8.0.27. To "install" the application, navigate inside the "payroll" folder using a terminal and run "mvn clean install".

### RUN
To run the application, navigate inside the "payroll" folder using a terminal and run "mvn spring-boot:run". The UI is then deployed on http://localhost:8080. A MySQL database and a database user satisfying the "spring.datasource.*" properties of the "application.properties" file have to be created and started before installing and running the application.
