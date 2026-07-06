import "../pages/Dashboard.css";

function QuickActions() {
  return (
    <div className="quick-actions">
      <h3>Quick Actions</h3>

      <div className="action-buttons">

        <button className="action-btn">
          ➕ Add Employee
        </button>

        <button className="action-btn">
          📅 Attendance
        </button>

        <button className="action-btn">
          💰 Payroll
        </button>

        <button className="action-btn">
          📝 Leave
        </button>

      </div>
    </div>
  );
}

export default QuickActions;