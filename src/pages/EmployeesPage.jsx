import "./EmployeesPage.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DeleteModal from "../components/DeleteModal";
import {
  getEmployees,
  deleteEmployee,
} from "../services/employeeService";

function EmployeesPage() {
  const [employees, setEmployees] = useState([
    {
      id: "EMP001",
      name: "Rahul Sharma",
      department: "IT",
      position: "Frontend Developer",
      email: "rahul@gmail.com",
      status: "Active",
    },
    {
      id: "EMP002",
      name: "Priya Verma",
      department: "HR",
      position: "HR Manager",
      email: "priya@gmail.com",
      status: "Active",
    },
    {
      id: "EMP003",
      name: "Amit Singh",
      department: "Finance",
      position: "Accountant",
      email: "amit@gmail.com",
      status: "Inactive",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [deleteError, setDeleteError] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = (employee) => {
    setSelectedEmployee(employee);
    setDeleteError("");
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedEmployee) return;

    try {
      setIsDeleting(true);
      const id = selectedEmployee._id || selectedEmployee.id;
      await deleteEmployee(id);
      setEmployees((prevEmployees) =>
        prevEmployees.filter(
          (emp) => (emp._id || emp.id) !== id
        )
      );
      setShowModal(false);
      setSelectedEmployee(null);
    } catch (err) {
      console.error("Delete employee failed", err);
      setDeleteError(
        err.response?.data?.message || err.message || "Could not delete employee"
      );
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);

        const data = await getEmployees();

        if (Array.isArray(data)) {
          setEmployees(data);
        } else if (data?.data) {
          setEmployees(data.data);
        }
      } catch (err) {
        console.log(err);

        // Backend fail ho to dummy data hi dikhega
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter((emp) => {
    return (
      emp.name?.toLowerCase().includes(search.toLowerCase()) ||
      emp.department?.toLowerCase().includes(search.toLowerCase()) ||
      emp.email?.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="employees-page">
      <div className="employees-header">
        <h2>Employee Management</h2>

        <div className="employees-actions">
          <input
            type="text"
            placeholder="Search Employee..."
            className="search-box"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Link to="/add-employee">
            <button className="add-btn">+ Add Employee</button>
          </Link>
        </div>
      </div>

      {loading && <h3>Loading...</h3>}

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
          {filteredEmployees.map((emp) => (
            <tr key={emp._id ?? emp.id}>
              <td>{emp._id ?? emp.id}</td>
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
                <Link to="/employee-details">
                  <button className="view-btn">View</button>
                </Link>

                <Link to="/edit-employee">
                  <button className="edit-btn">Edit</button>
                </Link>

                <button
                  className="delete-btn"
                  onClick={() => handleDeleteClick(emp)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <DeleteModal
          employeeName={selectedEmployee?.name}
          onClose={() => {
            setShowModal(false);
            setSelectedEmployee(null);
            setDeleteError("");
          }}
          onConfirm={handleConfirmDelete}
          isDeleting={isDeleting}
          error={deleteError}
        />
      )}
    </div>
  );
}

export default EmployeesPage;