import "./PayrollPage.css";
function PayrollPage() {
  return (
    <div className="payroll-container">

      <h1>Payroll</h1>

      <input
  type="text"
  placeholder="Search Employee..."
  className="search-box"
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

          <tr>
            <td>Kumkum</td>
            <td>IT</td>
            <td>₹50,000</td>
            <td>₹5,000</td>
           <td>
  <span className="status-paid">Paid</span>
</td>

          </tr>

          <tr>
            <td>Rahul</td>
            <td>HR</td>
            <td>₹40,000</td>
            <td>₹2,000</td>
           <td>
  <span className="status-pending">Pending</span>
</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default PayrollPage;