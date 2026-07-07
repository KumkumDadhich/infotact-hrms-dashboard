import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

     <h2 className="logo">
    HRMS Pro
</h2>

      <hr />

      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        Dashboard
      </NavLink>

      <NavLink to="/employees" className={({ isActive }) => isActive ? "active" : ""}>
        Employees
      </NavLink>

      <NavLink to="/attendance" className={({ isActive }) => isActive ? "active" : ""}>
        Attendance
      </NavLink>

      <NavLink to="/payroll" className={({ isActive }) => isActive ? "active" : ""}>
        Payroll
      </NavLink>

      <NavLink to="/leave" className={({ isActive }) => isActive ? "active" : ""}>
        Leave
      </NavLink>

      <NavLink to="/settings" className={({ isActive }) => isActive ? "active" : ""}>
        Settings
      </NavLink>

      <button
  className="menu-item"
  onClick={() => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
  }}
>
  🚪 Logout
</button>

    </div>
  );
}

export default Sidebar;