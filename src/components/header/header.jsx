import { useLocation, Link } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <div className="header">
      <p>HRNet</p>
      {currentPage === "/employeeList" ? (
        <Link to="/" className="navLink">
          <div className="navButton">Employee Form</div>
        </Link>
      ) : (
        <Link to="/employeeList" className="navLink">
          <div className="navButton">View current employee list</div>
        </Link>
      )}
    </div>
  );
}

export default Header;
