import { useState, useEffect } from 'react';
import "./AttendancePage.css";

function AttendancePage() {
  // 1. State: This creates a waiting room for your database data
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 2. The Hook: This runs automatically the second the page opens
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        // Calling your backend Port 5000 API!
        const response = await fetch('http://localhost:5000/api/attendance');
        const data = await response.json();
        
        // Take the JSON data and put it in our state
        setAttendanceRecords(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching database records:", error);
        setIsLoading(false);
      }
    };

    fetchAttendance();
  }, []); // The empty brackets mean "only run this once when the page loads"

  return (
    <div className="attendance-container">
      <h1>Attendance</h1>

      <input
        className="search-box"
        type="text"
        placeholder="Search Attendance..."
      />

      <table border="1">
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
          {/* 3. The Display Logic: Show a loading message, or draw the table */}
          {isLoading ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                Loading live data from MongoDB...
              </td>
            </tr>
          ) : (
            /* 4. The Loop: For every record in the database, create a new table row */
            attendanceRecords.map((record) => (
              <tr key={record._id}>
                <td>{record.name}</td>
                <td>{record.date}</td>
                <td>{record.checkIn}</td>
                <td>{record.checkOut}</td>
                {/* Dynamically apply the CSS class based on the status (present, late, absent) */}
                <td className={record.status.toLowerCase()}>{record.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AttendancePage;