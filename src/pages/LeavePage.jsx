import "./LeavePage.css";

function LeavePage() {
  return (
    <div className="leave-container">

      <h1>Leave Management</h1>

      <input
        className="search-box"
        type="text"
        placeholder="Search Employee..."
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Leave Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Kumkum</td>
            <td>Casual</td>
            <td>21-06-2026</td>
            <td>22-06-2026</td>
            <td className="approved">Approved</td>
          </tr>

          <tr>
            <td>Rahul</td>
            <td>Sick</td>
            <td>20-06-2026</td>
            <td>21-06-2026</td>
            <td className="pending">Pending</td>
          </tr>

          <tr>
            <td>Neha</td>
            <td>Casual</td>
            <td>18-06-2026</td>
            <td>19-06-2026</td>
            <td className="rejected">Rejected</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default LeavePage;