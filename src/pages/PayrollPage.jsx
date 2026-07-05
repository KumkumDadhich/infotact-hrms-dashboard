import "./PayrollPage.css";
import { useState } from "react";

function PayrollPage() {
  const payrollData = [
    {
      id: 1,
      name: "Kumkum",
      department: "IT",
      salary: "₹50,000",
      bonus: "₹5,000",
      status: "Paid",
    },
    {
      id: 2,
      name: "Rahul",
      department: "HR",
      salary: "₹40,000",
      bonus: "₹2,000",
      status: "Pending",
    },
  ];

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredPayroll = payrollData.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedPayroll = [...filteredPayroll].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });

  return (
    <div className="payroll-container">
      <h1>Payroll</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search Employee..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="sort-btn"
          onClick={() =>
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
          }
        >
          Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
        </button>
      </div>

      <h3>Total Payroll Records: {sortedPayroll.length}</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Bonus</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {sortedPayroll.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No payroll records found.
              </td>
            </tr>
          ) : (
            sortedPayroll.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>
                <td>{employee.bonus}</td>
                <td>
                  <span
                    className={
                      employee.status === "Paid"
                        ? "status-paid"
                        : "status-pending"
                    }
                  >
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PayrollPage;