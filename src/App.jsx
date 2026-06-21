import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import PayrollPage from "./pages/PayrollPage";
import LeavePage from "./pages/LeavePage";



function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <PayrollPage />

        <LeavePage />
      </div>
    </div>
  );
}

export default App;