import "./PayrollPage.css";
function PayrollPage() {
  return (
    <div className="payroll-container">

      <h1>Payroll</h1>

      <input
        type="text"
        placeholder="Search Employee..."
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
            <td className="paid">Paid</td>

          </tr>

          <tr>
            <td>Rahul</td>
            <td>HR</td>
            <td>₹40,000</td>
            <td>₹2,000</td>
           <td className="pending">Pending</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default PayrollPage;