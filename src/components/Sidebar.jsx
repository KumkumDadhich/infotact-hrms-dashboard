import "./Sidebar.css";
function Sidebar() {
  return (
    <div
      style={{
        width: "90px",
        height: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "18px",
        cursor: "pointer",
  
      }}
    >
      <h2>HRMS</h2>
      <hr />
 <p className="menu-item">🏠 Dashboard</p>

      <p className="menu-item">👨‍💼 Employees</p>

      <p className="menu-item">📅 Attendance</p>

      <p className="menu-item">💰 Payroll</p>

      <p className="menu-item">⚙️ Settings</p>

      <p className="menu-item">🚪 Logout</p>
      
    </div>
  );
}

export default Sidebar;