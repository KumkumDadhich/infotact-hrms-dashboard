import EmployeePage from "./pages/EmployeePage";
import DashboardCard from "./components/DashboardCard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Navbar />
       <EmployeePage />


      <div
        style={{
          flex: 1,
          background: "#f1f5f9",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1>Welcome Kumkum 👋</h1>
          <div
              style={{
               display: "flex",
               flexWrap: "wrap",
               gap: "20px",
              marginTop: "30px",
              justifyContent: "center",
  }}
>
    <DashboardCard
    title="Total Employees"
    value="120"
  />

  <DashboardCard
    title="Attendance"
    value="95%"
  />

  <DashboardCard
    title="Payroll"
    value="₹5,00,000"
  />
</div>

          <p>This is HRMS Dashboard.</p>
        </div>
      </div>
    </div>
  );
}

export default App;