import React from 'react';
import './App.css';
import Header from './components/header/header';
import EmployeeListPage from './pages/employeeListPage/employeeListPage';
import AddEmployeePage from './pages/addEmployeePage/addEmployeePage';
import ErrorPage from './pages/errorPage/errorPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
      <Header/>
        <Routes>
          {/*Page d'acceuil*/}
          <Route exact path="/" element={<AddEmployeePage/>} />
          {/*Page employee list*/}
          <Route path="employeeList" element={<EmployeeListPage/>} />
          {/*Page erreur*/}
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
    </Router>
    </React.Fragment>
  );
}

export default App;
