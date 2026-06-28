import "./EmployeesPage.css";
import { Link } from "react-router-dom";



function EmployeesPage() {
  const employees = [
    {
      id: "EMP001",
      name: "Rahul Sharma",
      department: "IT",
      position: "Frontend Developer",
      email: "rahul@example.com",
      status: "Active",
    },
    {
      id: "EMP002",
      name: "Priya Verma",
      department: "HR",
      position: "HR Manager",
      email: "priya@example.com",
      status: "Active",
    },
    {
      id: "EMP003",
      name: "Amit Singh",
      department: "Finance",
      position: "Accountant",
      email: "amit@example.com",
      status: "Inactive",
    },
    {
      id: "EMP004",
      name: "Neha Gupta",
      department: "Marketing",
      position: "Marketing Executive",
      email: "neha@example.com",
      status: "Active",
    },
    {
      id: "EMP005",
      name: "Arjun Mehta",
      department: "Operations",
      position: "Operations Manager",
      email: "arjun@example.com",
      status: "Active",
    },
  ];

  return (
    <div className="employees-page">
      <div className="employees-header">
        <h2>Employee Management</h2>

        <div className="employees-actions">
          <input
            type="text"
            placeholder="Search Employee..."
            className="search-box"
          />

          <Link to="/add-employee">
           <button className="add-btn">+ Add Employee</button>
          </Link>
        </div>
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.position}</td>
              <td>{emp.email}</td>

              <td>
                <span
                  className={
                    emp.status === "Active"
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {emp.status}
                </span>
              </td>

              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesPage;