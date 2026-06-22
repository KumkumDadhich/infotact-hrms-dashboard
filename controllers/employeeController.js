import User from '../models/User.js';

// @desc    Get all employees
// @route   GET /api/employees
// @access  Private (Admin, Manager)
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: employees.length,
      data: employees,
    });
  } catch (error) {
    console.error('Get All Employees Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving employee list',
      error: error.message,
    });
  }
};

// @desc    Get single employee by ID
// @route   GET /api/employees/:id
// @access  Private (Admin, Manager)
export const getEmployeeById = async (req, res) => {
  try {
    const employee = await User.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found',
      });
    }

    res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (error) {
    console.error('Get Employee By ID Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving employee details',
      error: error.message,
    });
  }
};

// @desc    Create a new employee
// @route   POST /api/employees
// @access  Private (Admin only)
export const createEmployee = async (req, res) => {
  const { name, email, password, role, department, designation, phone, salary } = req.body;

  try {
    const employeeExists = await User.findOne({ email });

    if (employeeExists) {
      return res.status(400).json({
        success: false,
        message: 'Email is already in use by another employee',
      });
    }

    const employee = await User.create({
      name,
      email,
      password: password || 'Welcome@123', // Default temporary password if not provided
      role: role || 'Employee',
      department: department || 'General',
      designation: designation || 'Staff',
      phone,
      salary: salary || 0,
    });

    res.status(201).json({
      success: true,
      message: 'Employee created successfully',
      data: {
        _id: employee._id,
        name: employee.name,
        email: employee.email,
        role: employee.role,
        department: employee.department,
        designation: employee.designation,
      },
    });
  } catch (error) {
    console.error('Create Employee Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error creating employee record',
      error: error.message,
    });
  }
};

// @desc    Update employee details
// @route   PUT /api/employees/:id
// @access  Private (Admin, Manager - Manager cannot update salary)
export const updateEmployee = async (req, res) => {
  try {
    const employee = await User.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found',
      });
    }

    // Role-based restrictions on fields
    // Managers should NOT be allowed to update salary or roles
    if (req.user.role === 'Manager') {
      if (req.body.salary !== undefined && req.body.salary !== employee.salary) {
        return res.status(403).json({
          success: false,
          message: 'Managers are not authorized to update employee salaries',
        });
      }
      if (req.body.role !== undefined && req.body.role !== employee.role) {
        return res.status(403).json({
          success: false,
          message: 'Managers are not authorized to elevate or change user roles',
        });
      }
    }

    // Fields that can be updated
    const updateFields = [
      'name',
      'email',
      'role',
      'department',
      'designation',
      'phone',
      'salary',
      'status',
    ];

    updateFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        employee[field] = req.body[field];
      }
    });

    // Check if new password is being set
    if (req.body.password) {
      employee.password = req.body.password;
    }

    const updatedEmployee = await employee.save();

    res.status(200).json({
      success: true,
      message: 'Employee updated successfully',
      data: {
        _id: updatedEmployee._id,
        name: updatedEmployee.name,
        email: updatedEmployee.email,
        role: updatedEmployee.role,
        department: updatedEmployee.department,
        designation: updatedEmployee.designation,
        phone: updatedEmployee.phone,
        salary: updatedEmployee.salary,
        status: updatedEmployee.status,
      },
    });
  } catch (error) {
    console.error('Update Employee Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error updating employee details',
      error: error.message,
    });
  }
};

// @desc    Delete employee
// @route   DELETE /api/employees/:id
// @access  Private (Admin only)
export const deleteEmployee = async (req, res) => {
  try {
    const employee = await User.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found',
      });
    }

    // Don't allow admins to delete themselves
    if (employee._id.toString() === req.user._id.toString()) {
      return res.status(400).json({
        success: false,
        message: 'You cannot delete your own admin account',
      });
    }

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Employee record deleted successfully',
    });
  } catch (error) {
    console.error('Delete Employee Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error deleting employee record',
      error: error.message,
    });
  }
};
