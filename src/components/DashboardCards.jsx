import "../pages/Dashboard.css";

const cards = [
  {
    title: "Total Employees",
    value: "120",
    icon: "👥",
    color: "#2563eb",
  },
  {
    title: "Present Today",
    value: "108",
    icon: "📅",
    color: "#10b981",
  },
  {
    title: "Pending Leaves",
    value: "08",
    icon: "📝",
    color: "#f59e0b",
  },
  {
    title: "Payroll",
    value: "Paid",
    icon: "💰",
    color: "#8b5cf6",
  },
];

function DashboardCards() {
  return (
    <div className="dashboard-cards">
      {cards.map((card, index) => (
        <div className="dashboard-card" key={index}>
          <div
            className="card-icon"
            style={{ background: card.color }}
          >
            {card.icon}
          </div>

          <div>
            <h4>{card.title}</h4>
            <h2>{card.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;