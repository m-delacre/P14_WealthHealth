import React from "react";
import EmployeeTable from "../../components/employeeTable/employeeTable";
import { useSelector } from "react-redux";
import makeEmployeeList from "../../service/makeEmployeeList";

function EmployeeListPage() {
  const listEmployee = useSelector((state) => state.employeesList);
  const data = React.useMemo(() => makeEmployeeList(listEmployee), []);
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName", // accessor is the "key" in the data
      },

      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Date of Birth",
        accessor: "birthDate",
      },
      {
        Header: "Street",
        accessor: "street",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Zip Code",
        accessor: "zipCode",
      },
    ],
    []
  );

  return (
      <div className="listEmployeePage">
        <div className="employeeTable">
          <EmployeeTable columns={columns} data={data} />
        </div>
      </div>
  );
}

export default EmployeeListPage;
