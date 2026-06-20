import Attendance from '../models/Attendance.js';

// Get all attendance records
export const getAttendance = async (req, res) => {
  try {
    const records = await Attendance.find();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: "Error fetching attendance records", error: error.message });
  }
};