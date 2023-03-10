/**
 * 
 * @param {Array} list 
 * @returns an array of object Employee
 */
export default function makeEmployeeList(list) {
  const employeeList = [];
  list.forEach((employee) => {
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
    employeeList.push(newEmployee);
  });

  return employeeList;
}
