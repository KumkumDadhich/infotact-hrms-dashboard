import SettingsPage from "./pages/SettingsPage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import EmployeesPage from "./pages/EmployeesPage";
import AddEmployee from "./pages/AddEmployee";
import EmployeeDetails from "./pages/EmployeeDetails";
import EditEmployee from "./pages/EditEmployee";



import DashboardPage from "./pages/DashboardPage";

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
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/leave" element={<LeavePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route
                path="/employee-details"
                element={<EmployeeDetails />}
              />
              <Route
            path="/edit-employee"
        element={<EditEmployee />}
      />
        </Routes>
        
     
      </div>
    </div>
  );
}

export default App;