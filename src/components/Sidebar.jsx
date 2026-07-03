import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";


function Sidebar() {
   const location = useLocation();
  return (
    <div className="sidebar">

      <h2 className="logo">HRMS</h2>

      <hr />

      <Link
    to="/"
    className={`menu-item ${location.pathname === "/" ? "active" : ""}`}
    >
      🏠 Dashboard
      </Link>

      <Link to="/employees" className="menu-item">
        👨‍💼 Employees
      </Link>

      <Link
      to="/attendance"
    className={`menu-item ${location.pathname === "/attendance" ? "active" : ""}`}
      >
    📅 Attendance
    </Link>

      <Link
  to="/payroll"
  className={`menu-item ${location.pathname === "/payroll" ? "active" : ""}`}
>
  💰 Payroll
</Link>

      <Link
  to="/leave"
  className={`menu-item ${location.pathname === "/leave" ? "active" : ""}`}
>
  📝 Leave
</Link>

      <Link to="/settings"
    className={`menu-item ${location.pathname === "/settings" ? "active" : ""}`}
    >
      ⚙️ Settings
    </Link>

      <button
        className="menu-item"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        🚪 Logout
      </button>

    </div>
  );
}

export default Sidebar;