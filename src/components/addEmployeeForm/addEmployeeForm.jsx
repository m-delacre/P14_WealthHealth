import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Employee from "../../service/employeeBuilder";
import dateFormater from "../../service/dateFormater";

function AddEmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState();
  const [startDate, setStartDate] = useState();
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [departement, setDepartement] = useState("");

  const dispatch = useDispatch();
  const mesEmployees = useSelector((state) => state.employeesList);
  console.log("mes employee:", mesEmployees);

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeStreet = (event) => {
    setStreet(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeZipCode = (event) => {
    setZipCode(event.target.value);
  };

  const clearInput = () => {
    setFirstName("");
    setLastName("");
    setBirthDate();
    setStartDate();
    setStreet("");
    setCity("");
    setState("");
    setZipCode(0);
    setDepartement("");
  };

  const AddNewEmployee = (e) => {
    e.preventDefault();
    //Build the new employee with the user input
    const newEmployee = new Employee(
      firstName,
      lastName,
      dateFormater(birthDate.toLocaleString().split(",")[0].split(" ")[0]),
      dateFormater(startDate.toLocaleString().split(",")[0].split(" ")[0]),
      street,
      city,
      state,
      zipCode,
      departement
    );
    console.log(
      `mon nouvel employé: ${newEmployee.firstName} ${newEmployee.lastName} ${newEmployee.city} ${birthDate}`
    );

    //Add new employee to redux
    dispatch({
      type: "addEmployee",
      payload: { newEmployee: newEmployee },
    });

    //clear the input
    clearInput();
  };

  return (
    <div className="addEmployeeForm">
      <form>
        <div className="addEmployeeForm-top">
          <div className="textInput">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleChangeFirstName}
            />
          </div>
          <div className="textInput">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleChangeLastName}
            />
          </div>
          <div className="textInput">
            <label htmlFor="birthDate">Date of Birth</label>
            <DatePicker
              dateFormat="MM/dd/yyyy"
              id="birthDate"
              selected={birthDate}
              onChange={(date) => setBirthDate(date)}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </div>
          <div className="textInput">
            <label htmlFor="startDate">Start Date</label>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              id="startDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </div>
          <div className="address">
            <p>Address :</p>
            <div className="textInput">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                id="street"
                value={street}
                onChange={handleChangeStreet}
              />
            </div>
            <div className="textInput">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={handleChangeCity}
              />
            </div>
            <div className="textInput">
              <label htmlFor="state">State</label>
              {/* mon composant selector */}
            </div>
            <div className="textInput">
              <label htmlFor="city">Zip Code</label>
              <input
                type="number"
                id="city"
                value={zipCode}
                onChange={handleChangeZipCode}
              />
            </div>
            <div className="textInput">
              <label htmlFor="department">Department</label>
              {/* mon composant selector */}
            </div>
          </div>
        </div>
        <div className="addEmployeeForm-bot">
          <button className="saveButton" onClick={AddNewEmployee}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployeeForm;
