import "./AttendancePage.css";

function AttendancePage() {
  return (
    <div className="attendance-container">
      <h1>Attendance</h1>

      <input
        className="search-box"
        type="text"
        placeholder="Search Attendance..."
      />
      <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Date</th>
      <th>Check In</th>
      <th>Check Out</th>
      <th>Status</th>
    </tr>
  </thead>

  <tbody>

    <tr>
      <td>Kumkum</td>
      <td>20-06-2026</td>
      <td>09:00</td>
      <td>05:00</td>
      <td className="present">Present</td>
    </tr>

    <tr>
      <td>Rahul</td>
      <td>20-06-2026</td>
      <td>09:15</td>
      <td>05:00</td>
      <td className="late">Late</td>
    </tr>

    <tr>
      <td>Neha</td>
      <td>20-06-2026</td>
      <td>-</td>
      <td>-</td>
      <td className="absent">Absent</td>
    </tr>

  </tbody>
</table>
    </div>
  );
}

export default AttendancePage;