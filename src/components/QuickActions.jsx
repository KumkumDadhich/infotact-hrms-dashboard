import { useNavigate } from "react-router-dom";
import "../pages/Dashboard.css";

function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="quick-actions">
      <h3>Quick Actions</h3>

      <div className="action-buttons">
        <button
          className="action-btn"
          onClick={() => navigate("/add-employee")}
        >
          ➕ Add Employee
        </button>

        <button
          className="action-btn"
          onClick={() => navigate("/attendance")}
        >
          📅 Attendance
        </button>

        <button
          className="action-btn"
          onClick={() => navigate("/payroll")}
        >
          💰 Payroll
        </button>

        <button
          className="action-btn"
          onClick={() => navigate("/leave")}
        >
          📝 Leave
        </button>
      </div>
    </div>
  );
}

export default QuickActions;