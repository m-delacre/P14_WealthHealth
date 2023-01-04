export default function makeEmployeeList(list) {
  const employeeList = [];
  list.forEach((employee) => {
    console.log("employee",employee);
    const newEmployee = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      birthDate: employee.birthDate.toString(),
      startDate: employee.startDate.toString(),
      street: employee.street,
      city: employee.city,
      state: employee.state,
      zipCode: employee.zipCode,
      department: employee.department,
    };
    console.log("newEmployee",newEmployee)
    employeeList.push(newEmployee);
  });

  return employeeList;
}
