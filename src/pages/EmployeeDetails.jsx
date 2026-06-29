import "./EmployeeDetails.css";
import { Link } from "react-router-dom";


function EmployeeDetails() {
  return (
    <div className="employee-details-container">
            <Link to="/employees" className="back-btn">
        ← Back to Employees
      </Link>
      <div className="employee-card">

        <div className="profile-section">
          <img
            src="https://ui-avatars.com/api/?name=Rahul+Sharma&background=2563eb&color=fff&size=150"
            alt="Employee"
          />

          <h2>Rahul Sharma</h2>
          <p>Frontend Developer</p>

          <span className="status active">
            Active
          </span>
        </div>

        <div className="details-section">

          <h3>Employee Information</h3>

          <div className="details-grid">

            <div>
              <label>Employee ID</label>
              <p>EMP001</p>
            </div>

            <div>
              <label>Email</label>
              <p>rahul@gmail.com</p>
            </div>

            <div>
              <label>Phone</label>
              <p>+91 9876543210</p>
            </div>

            <div>
              <label>Department</label>
              <p>IT</p>
            </div>

            <div>
              <label>Position</label>
              <p>Frontend Developer</p>
            </div>

            <div>
              <label>Salary</label>
              <p>₹55,000</p>
            </div>

            <div>
              <label>Joining Date</label>
              <p>15 June 2025</p>
            </div>

            <div>
              <label>Manager</label>
              <p>Amit Verma</p>
            </div>

          </div>

        </div>

      </div>

      <div className="summary-section">

        <div className="summary-card">
          <h3>Attendance</h3>
          <h1>95%</h1>
          <p>This Month</p>
        </div>

        <div className="summary-card">
          <h3>Leaves</h3>
          <h1>4</h1>
          <p>Used</p>
        </div>

        <div className="summary-card">
          <h3>Projects</h3>
          <h1>3</h1>
          <p>Assigned</p>
        </div>

      </div>

    </div>
  );
}

export default EmployeeDetails;