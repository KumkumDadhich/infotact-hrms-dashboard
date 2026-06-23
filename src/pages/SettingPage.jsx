function SettingsPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>⚙️ Settings</h1>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          width: "400px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h3>User Profile</h3>

        <p><b>Name:</b> Kumkum Dadhich</p>
        <p><b>Email:</b> kumkum@example.com</p>
        <p><b>Role:</b> Frontend Developer</p>

        <button
          style={{
            padding: "10px 20px",
            background: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}

export default SettingsPage;