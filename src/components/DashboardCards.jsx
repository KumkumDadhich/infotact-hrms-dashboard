import { useNavigate } from "react-router-dom";
import "../pages/Dashboard.css";
import {
  FaUsers,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaClipboardList,
} from "react-icons/fa";
const cards = [
  {
    title: "Total Employees",
    value: "120",
    change: "+12%",
    trend: "up",
    icon: <FaUsers />,
    color: "#2563eb",
    path: "/employees",
  },
  {
    title: "Present Today",
    value: "108",
    change: "+3%",
    trend: "up",
    icon: <FaCalendarCheck />,
    color: "#10b981",
    path: "/attendance",
  },
  {
    title: "Pending Leaves",
    value: "08",
    change: "-2",
    trend: "down",
    icon: <FaClipboardList />,
    color: "#f59e0b",
    path: "/leave",
  },
  {
    title: "Payroll",
    value: "Paid",
    change: "Completed",
    trend: "up",
    icon: <FaMoneyBillWave />,
    color: "#8b5cf6",
    path: "/payroll",
  },
];
function DashboardCards() {
  const navigate = useNavigate();
  return (
    <div className="dashboard-cards">
      {cards.map((card, index) => (
        <div
  className="dashboard-card"
  key={index}
  onClick={() => navigate(card.path)}
>
          <div
            className="card-icon"
            style={{ background: card.color }}
          >
            {card.icon}
          </div>

          <div>
  <h4>{card.title}</h4>

  <h2>{card.value}</h2>

  <p
    className={
      card.trend === "up"
        ? "change-up"
        : "change-down"
    }
  >
    {card.change}
  </p>
</div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;