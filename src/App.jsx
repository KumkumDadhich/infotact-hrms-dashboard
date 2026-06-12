function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          background: "#1e293b",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>HRMS</h2>
        <hr />
        <p>Dashboard</p>
        <p>Employees</p>
        <p>Leave Requests</p>
        <p>Payroll</p>
        <p>Settings</p>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          background: "#f8fafc",
        }}
      >
        <h1>HR Dashboard</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "200px",
            }}
          >
            <h3>Total Employees</h3>
            <h2>120</h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "200px",
            }}
          >
            <h3>Pending Leaves</h3>
            <h2>15</h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "200px",
            }}
          >
            <h3>Payroll Processed</h3>
            <h2>95%</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;