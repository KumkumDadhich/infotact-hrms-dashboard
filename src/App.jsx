import SettingsPage from "./pages/SettingsPage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import EmployeesPage from "./pages/EmployeesPage";

import DashboardPage from "./pages/DashboardPage";
import EmployeePage from "./pages/EmployeePage";
import AttendancePage from "./pages/AttendancePage";
import PayrollPage from "./pages/PayrollPage";
import LeavePage from "./pages/LeavePage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<DashboardPage />} />

          <Route path="/employees" element={<EmployeePage />} />

          <Route path="/attendance" element={<AttendancePage />} />

          <Route path="/payroll" element={<PayrollPage />} />

          <Route path="/leave" element={<LeavePage />} />

          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;