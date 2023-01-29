import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import Employee from "../../service/employeeBuilder";
import dateFormater from "../../service/dateFormater";
import { departmentList } from "../../data/departmentList";
import { statesList } from "../../data/statesList";
import { Selector } from "md-selector-react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

function AddEmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState();
  const [startDate, setStartDate] = useState();
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [department, setDepartment] = useState("");
  const [modal, setModal] = useState(false);
  let [errorMessage, setErrorMessage] = useState("");

  let formIsValid = true;
  const setFormIsValid = () => {
    formIsValid = !formIsValid;
  };

  const dispatch = useDispatch();

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

  const handleChangeStates = (value) => {
    setStates(value);
  };
  const handleChangeDepartment = (value) => {
    setDepartment(value);
  };

  const handleChangeZipCode = (event) => {
    setZipCode(event.target.value);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  /**
   * 
   * @param {Object} Employee 
   * 
   * it checks if there is no empty value
   */
  const formValidator = (Employee) => {
    errorMessage = "";
    if (Employee.firstName === "" || undefined) {
      setFormIsValid();
      setErrorMessage("Form invalid");
    } else if (Employee.lastName === "" || undefined) {
      setFormIsValid();
      setErrorMessage("Form invalid");
    } else if (Employee.street === "" || undefined) {
      setFormIsValid();
      setErrorMessage("Form invalid");
    } else if (Employee.city === "" || undefined) {
      setFormIsValid();
      setErrorMessage("Form invalid");
    } else if (Employee.zipCode === 0) {
      setFormIsValid();
      setErrorMessage("Form invalid");
    } else {
      setErrorMessage("Form is valid, the employee has been registered");
    }
  };

  /**
   * 
   * clear input after validation
   * 
   */
  const clearInput = () => {
    setFirstName("");
    setLastName("");
    setBirthDate();
    setStartDate();
    setStreet("");
    setCity("");
    setStates("");
    setZipCode(0);
    setDepartment("");
  };

  /**
   * 
   * @param {Event} e 
   * 
   */
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
      states,
      zipCode,
      department
    );

    //basic check if no empty value
    formValidator(newEmployee);

    if (formIsValid) {
      //Add new employee to redux
      dispatch({
        type: "addEmployee",
        payload: { newEmployee: newEmployee },
      });

      handleModal();

      //clear the input
      clearInput();

    } else {
      // tells the user that the input is invalid
      handleModal();
    }
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
          <div className="textInput textInput-Date">
            <label htmlFor="birthDate">Date of Birth</label>
            <DatePicker
              dateFormat="yyyy/MM/dd"
              id="birthDate"
              selected={birthDate}
              onChange={(date) => setBirthDate(date)}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </div>
          <div className="textInput textInput-Date">
            <label htmlFor="startDate">Start Date</label>
            <DatePicker
              dateFormat="yyyy/MM/dd"
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
              <Selector
                title="State"
                valuesList={statesList}
                onChange={(e) => {
                  handleChangeStates(e.target.value);
                }}
              />
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
              <Selector
                title="Department"
                valuesList={departmentList}
                onChange={(e) => {
                  handleChangeDepartment(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="addEmployeeForm-bot">
          <button className="saveButton" onClick={(e) => AddNewEmployee(e)}>
            Save
          </button>
          <PureModal
            header="Form validation..."
            footer={<div></div>}
            isOpen={modal}
            closeButton="X"
            closeButtonPosition="bottom"
            onClose={() => {
              setModal(false);
              return true;
            }}
          >
            <p>{`${errorMessage}`}</p>
          </PureModal>
        </div>
      </form>
    </div>
  );
}

export default AddEmployeeForm;
