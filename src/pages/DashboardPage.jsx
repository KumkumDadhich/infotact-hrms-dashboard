import DashboardCards from "../components/DashboardCards";
import DashboardCharts from "../components/DashboardCharts";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";
import DashboardBanner from "../components/DashboardBanner";
import "./Dashboard.css";

function DashboardPage() {
  // Get logged-in user
  const user = JSON.parse(localStorage.getItem("user")) || {};

  // Greeting based on current time
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <div className="dashboard-container">

      <div className="dashboard-header">
        <div>

          <h1>
            {greeting}, {user.name || "Admin"} 👋
          </h1>

          <p>
            Welcome to your HRMS Dashboard. Monitor employees, attendance, payroll, and daily activities from one place.
          </p>

        </div>
      </div>

      <DashboardBanner />

      <DashboardCards />

      <DashboardCharts />

      <RecentActivity />

      <QuickActions />

      <footer className="dashboard-footer">
        <p>© 2026 HRMS Dashboard | Developed by Kumkum Dadhich</p>
      </footer>

    </div>
  );
}

export default DashboardPage;