import "../pages/Dashboard.css";

function DashboardBanner() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="dashboard-banner">

      <div>
      <h2>📊 Today's Overview</h2>

<p>Tuesday, 7 July 2026</p>

<span>
• 108 employees are present today <br />
• 8 leave requests are pending <br />
• Payroll status: Completed
</span>
      </div>

      <div className="admin-profile">
        <img
          src="https://i.pravatar.cc/80"
          alt="Admin"
        />
      </div>

    </div>
  );
}

export default DashboardBanner;