import "../pages/Dashboard.css";

const activities = [
  {
    id: 1,
    text: "Rahul marked attendance",
    time: "10 mins ago",
    color: "#10b981",
  },
  {
    id: 2,
    text: "Priya applied for leave",
    time: "25 mins ago",
    color: "#f59e0b",
  },
  {
    id: 3,
    text: "Payroll generated successfully",
    time: "1 hour ago",
    color: "#2563eb",
  },
  {
    id: 4,
    text: "New employee added",
    time: "2 hours ago",
    color: "#8b5cf6",
  },
];

function RecentActivity() {
  return (
    <div className="activity-card">
      <h3>Recent Activity</h3>

      {activities.map((item) => (
        <div className="activity-item" key={item.id}>
          <span
            className="activity-dot"
            style={{ backgroundColor: item.color }}
          ></span>

          <div>
            <p>{item.text}</p>
            <small>{item.time}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;