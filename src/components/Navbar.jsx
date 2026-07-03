import { useNavigate } from "react-router-dom";
import { logout } from "../Services/authService";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        color: "black",
      }}
    >
      <h2>HRMS Dashboard</h2>

      <div>
        <button
          style={{
            padding: "8px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;