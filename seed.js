import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Attendance from './models/Attendance.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for seeding...');

    // Clear existing users
    await User.deleteMany();
    await Attendance.deleteMany();
    console.log('Cleared existing users and attendance.');

    // Sample users
    const users = [
      {
        name: 'System Admin',
        email: 'admin@hrms.com',
        password: 'password123',
        role: 'Admin',
        department: 'Executive',
        designation: 'CEO / Founder',
        phone: '1234567890',
        salary: 150000,
        status: 'Active',
      },
      {
        name: 'Sarah Manager',
        email: 'manager@hrms.com',
        password: 'password123',
        role: 'Manager',
        department: 'Engineering',
        designation: 'Engineering Lead',
        phone: '9876543210',
        salary: 95000,
        status: 'Active',
      },
      {
        name: 'John Employee',
        email: 'employee@hrms.com',
        password: 'password123',
        role: 'Employee',
        department: 'Engineering',
        designation: 'Software Developer',
        phone: '5556667777',
        salary: 60000,
        status: 'Active',
      },
    ];
    const attendanceRecords = [
      { name: 'Kumkum', date: '20-06-2026', checkIn: '09:00', checkOut: '05:00', status: 'Present' },
      { name: 'Rahul', date: '20-06-2026', checkIn: '09:15', checkOut: '05:00', status: 'Late' },
      { name: 'Neha', date: '20-06-2026', checkIn: '-', checkOut: '-', status: 'Absent' }
    ];

    await User.create(users);
    await Attendance.create(attendanceRecords);
    console.log('Database Seeded Successfully!');
    process.exit();
  } catch (error) {
    console.error('Seeding Error:', error.message);
    process.exit(1);
  }
};

seedData();
