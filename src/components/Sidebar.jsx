function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>HRMS</h2>
      <hr />

      <p>🏠 Dashboard</p>
      <p>👨‍💼 Employees</p>
      <p>📅 Attendance</p>
      <p>💰 Payroll</p>
      <p>⚙️ Settings</p>
      <p>🚪 Logout</p>
    </div>
  );
}

export default Sidebar;