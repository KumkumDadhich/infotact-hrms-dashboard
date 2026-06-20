import express from 'express';
import { getAttendance } from '../controllers/attendanceController.js';

const router = express.Router();

// This creates the GET /api/attendance endpoint
router.get('/', getAttendance);

export default router;