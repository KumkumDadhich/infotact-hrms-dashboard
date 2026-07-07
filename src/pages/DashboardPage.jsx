import DashboardCards from "../components/DashboardCards";
import DashboardCharts from "../components/DashboardCharts";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";
import DashboardBanner from "../components/DashboardBanner";
import "./Dashboard.css";

function DashboardPage() {
  // Get logged-in user from localStorage
 const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard-container">

      <div className="dashboard-header">
        <div>
          <h1>
            Welcome back, {user.name || "Admin"} 👋
          </h1>

        <p>
  Here's what's happening in your HRMS today.
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