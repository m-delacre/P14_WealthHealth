import { useTable } from "react-table";
import React from "react";
import { useSelector } from "react-redux";
import makeEmployeeList from "../../service/makeEmployeeList";

function EmployeeList() {
  /*const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },

      {
        col1: "react-table",
        col2: "rocks",
      },

      {
        col1: "whatever",
        col2: "you want",
      },
    ],

    []
  );*/
  const listEmployee = useSelector((state) => state.employeesList);
  const data = React.useMemo(() => makeEmployeeList(listEmployee), []);
  console.log(data);

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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",

                  background: "aliceblue",

                  color: "black",

                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",

                      border: "solid 1px gray",

                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default EmployeeList;
