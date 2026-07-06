import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, Bar } from "react-chartjs-2";
import "../pages/Dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DashboardCharts() {
  const employeeData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Employees",
        data: [40, 55, 65, 80, 95, 120],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const attendanceData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Attendance",
        data: [102, 108, 105, 110, 108],
        backgroundColor: "#10b981",
      },
    ],
  };

  return (
    <div className="chart-grid">
      <div className="chart-card">
        <h3>Employee Growth</h3>
        <Line data={employeeData} />
      </div>

      <div className="chart-card">
        <h3>Weekly Attendance</h3>
        <Bar data={attendanceData} />
      </div>
    </div>
  );
}

export default DashboardCharts;