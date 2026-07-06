import DashboardCards from "../components/DashboardCards";
import "./Dashboard.css";
import DashboardCharts from "../components/DashboardCharts";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";

function DashboardPage() {
  return (
    <div className="dashboard-container">

      <div className="dashboard-header">

        <div>
          <h1>Welcome back, Kumkum 👋</h1>
          <p>
            Here's what's happening in your HRMS today.
          </p>
        </div>

      </div>

      <DashboardCards />
      <DashboardCharts />
      <RecentActivity />
      <QuickActions />
    </div>
  );
}

export default DashboardPage;