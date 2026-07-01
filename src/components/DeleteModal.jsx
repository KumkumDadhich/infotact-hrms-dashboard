import "./DeleteModal.css";

function DeleteModal({ employeeName, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>Delete Employee</h2>

        <p>
          Are you sure you want to delete
          <strong> {employeeName}</strong>?
        </p>

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="confirm-delete-btn"
            onClick={onClose}
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default DeleteModal;