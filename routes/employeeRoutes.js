import express from 'express';
import {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from '../controllers/employeeController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// Apply protect middleware to all routes in this router
router.use(protect);

router
  .route('/')
  .get(authorize('Admin', 'Manager'), getAllEmployees)
  .post(authorize('Admin'), createEmployee);

router
  .route('/:id')
  .get(authorize('Admin', 'Manager'), getEmployeeById)
  .put(authorize('Admin', 'Manager'), updateEmployee)
  .delete(authorize('Admin'), deleteEmployee);

export default router;
