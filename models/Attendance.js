import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  checkIn: { type: String, default: '-' },
  checkOut: { type: String, default: '-' },
  status: { type: String, required: true, enum: ['Present', 'Late', 'Absent'] }
});

export default mongoose.model('Attendance', attendanceSchema);