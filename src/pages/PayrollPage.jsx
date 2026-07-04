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
const filteredPayroll = payrollData.filter((employee) =>
  employee.name.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div className="payroll-container">

      <h1>Payroll</h1>
<input
type="text"
placeholder="Search Employee..."
className="search-box"
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

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
  {filteredPayroll.length === 0 ? (
    <tr>
      <td colSpan="5" style={{ textAlign: "center" }}>
        No payroll records found.
      </td>
    </tr>
  ) : (
    filteredPayroll.map((employee) => (
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