import "./AddEmployee.css";

function EditEmployee() {
  return (
    <div className="add-employee-container">
      <div className="form-card">
        <h2>Edit Employee</h2>
        <p className="subtitle">
          Update employee details below.
        </p>

        <form className="employee-form">

          <div className="form-group">
            <label>Employee ID</label>
            <input type="text" defaultValue="EMP001" />
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" defaultValue="Rahul Sharma" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" defaultValue="rahul@example.com" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" defaultValue="9876543210" />
          </div>

          <div className="form-group">
            <label>Department</label>
            <select defaultValue="IT">
              <option>IT</option>
              <option>HR</option>
              <option>Finance</option>
              <option>Marketing</option>
              <option>Operations</option>
            </select>
          </div>

          <div className="form-group">
            <label>Position</label>
            <input type="text" defaultValue="Frontend Developer" />
          </div>

          <div className="form-group">
            <label>Salary</label>
            <input type="number" defaultValue="55000" />
          </div>

          <div className="form-group">
            <label>Joining Date</label>
            <input type="date" defaultValue="2025-06-15" />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select defaultValue="Active">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="button-group">
            <button type="submit" className="save-btn">
              Update Employee
            </button>

            <button type="reset" className="reset-btn">
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default EditEmployee;