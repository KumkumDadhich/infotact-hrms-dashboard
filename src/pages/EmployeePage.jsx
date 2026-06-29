import { Link } from "react-router-dom";
import "./EmployeePage.css";

function EmployeePage() {
  return (
    <div  className="employee-container">
      <h1>Employees</h1>

      <div className="employee-header">

    <input
    className="search-box"
    type="text"
    placeholder="Search Employees..."/>

    

</div>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Kumkum</td>
            <td>kumkum@gmail.com</td>
            <td>IT</td>
            <td>Active</td>
            <td>
              <Link to="/employee-details">
  <button className="view-btn">View</button>
</Link>

  <button className="edit-btn">Edit</button>
  <button className="delete-btn">Delete</button>
</td>
          </tr>

          <tr>
            <td>Rahul</td>
            <td>rahul@gmail.com</td>
            <td>HR</td>
            <td>Active</td>
            <td>
    <Link to="/employee-details">
      <button className="view-btn">View</button>
    </Link>

    <button className="edit-btn">Edit</button>
    <button className="delete-btn">Delete</button>
  </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default EmployeePage;