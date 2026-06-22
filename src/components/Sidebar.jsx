import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">HRMS</h2>

      <hr />

      <Link to="/" className="menu-item">
        🏠 Dashboard
      </Link>

      <Link to="/employees" className="menu-item">
        👨‍💼 Employees
      </Link>

      <Link to="/attendance" className="menu-item">
        📅 Attendance
      </Link>

      <Link to="/payroll" className="menu-item">
        💰 Payroll
      </Link>

      <Link to="/leave" className="menu-item">
        📝 Leave
      </Link>

      <Link to="/settings" className="menu-item">
        ⚙️ Settings
      </Link>

      <Link to="/logout" className="menu-item">
        🚪 Logout
      </Link>

    </div>
  );
}

export default Sidebar;