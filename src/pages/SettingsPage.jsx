function SettingPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Settings</h2>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>Profile Settings</h3>

        <input
          type="text"
          placeholder="Full Name"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button>Save Profile</button>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>Change Password</h3>

        <input
          type="password"
          placeholder="Current Password"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="password"
          placeholder="New Password"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button>Update Password</button>
      </div>
    </div>
  );
}

export default SettingPage;