import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          background: "#f1f5f9",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1>Welcome Kumkum 👋</h1>

          <p>This is HRMS Dashboard.</p>
        </div>
      </div>
    </div>
  );
}

export default App;