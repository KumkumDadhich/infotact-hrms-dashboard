import "./AddEmployee.css";

function AddEmployee() {
  return (
    <div className="add-employee-container">
      <div className="form-card">
        <h2>Add New Employee</h2>
        <p className="subtitle">
          Fill in the employee details below.
        </p>

        <form className="employee-form">

          <div className="form-group">
            <label>Employee ID</label>
            <input type="text" placeholder="EMP001" />
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email address" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter phone number" />
          </div>

          <div className="form-group">
            <label>Department</label>
            <select>
              <option>Select Department</option>
              <option>IT</option>
              <option>HR</option>
              <option>Finance</option>
              <option>Marketing</option>
              <option>Operations</option>
            </select>
          </div>

          <div className="form-group">
            <label>Position</label>
            <input type="text" placeholder="Frontend Developer" />
          </div>

          <div className="form-group">
            <label>Salary</label>
            <input type="number" placeholder="50000" />
          </div>

          <div className="form-group">
            <label>Joining Date</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="button-group">
            <button type="submit" className="save-btn">
              Save Employee
            </button>

            <button type="reset" className="reset-btn">
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddEmployee;