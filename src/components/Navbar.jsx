import "./Navbar.css";
import { FaBell, FaSearch } from "react-icons/fa";
import { useState } from "react";
import profileImage from "../assets/hero.png";
function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);

const notifications = [
  "Rahul applied for leave",
  "Payroll generated successfully",
  "Attendance updated",
];

  return (
    <div className="navbar">

      <div className="navbar-left">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search employees..."
          className="navbar-search"
        />
      </div>

      <div className="navbar-right">

        <div
          className="notification"
          onClick={() =>
            setShowNotifications(!showNotifications)
          }
        >
          <FaBell />

          <span className="badge">
  {notifications.length}
</span>

          {showNotifications && (
            <div className="notification-dropdown">

              <h4>Notifications</h4>

             {notifications.map((item, index) => (
  <p key={index}>🔔 {item}</p>
))}
            </div>
          )}

        </div>

        <div className="profile">
<img
  src={profileImage}
  alt="Profile"
  className="profile-img"
/>

          <div>
            <h4>Admin</h4>
            <small>HR Manager</small>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Navbar;