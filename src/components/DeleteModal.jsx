import "./DeleteModal.css";

function DeleteModal({ employeeName, onClose, onConfirm, isDeleting, error }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>Delete Employee</h2>

        <p>
          Are you sure you want to delete
          <strong> {employeeName || "this employee"}</strong>?
        </p>

        {error && <p className="delete-error">{error}</p>}

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={onClose}
            disabled={isDeleting}
          >
            Cancel
          </button>

          <button
            className="confirm-delete-btn"
            onClick={onConfirm}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default DeleteModal;