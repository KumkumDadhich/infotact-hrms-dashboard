# HRMS Dashboard Backend API

This is the production-grade, secure backend service for the HRMS (Human Resource Management System) Dashboard. Built using **Node.js**, **Express.js**, and **MongoDB** (with **Mongoose**), it handles authentication, user profile management, and Role-Based Access Control (RBAC).

---

## Key Features

1. **Express Server Setup**: Modular folder structure with ES modules support, centralized error handling, and developer logs using `morgan`.
2. **MongoDB Connection**: Configured connection pooling and error-handling wrapper using `mongoose`.
3. **JWT Authentication**: Password hashing using `bcryptjs` and secure authorization header extraction.
4. **Role-Based Access Control (RBAC) Middleware**:
   - **Admin**: Full read, write, update, and delete access for all resources.
   - **Manager**: View employee directories, modify employee information (excluding role elevations or salary updates).
   - **Employee**: Can view/access their own profile details.
5. **Database Seeding**: Easily load dummy data with preconfigured Admin, Manager, and Employee credentials to test RBAC immediately.

---

## Project Structure

```text
Backend/
├── controllers/         # Request handling logic
│   ├── authController.js     # User registration, login, profile retrieval
│   └── employeeController.js # CRUD handlers for employee management (with role protections)
├── middleware/          # Express middleware
│   └── authMiddleware.js     # JWT token validation & RBAC checkers
├── models/              # Mongoose models & schemas
│   └── User.js          # User schema (hashing pre-save hook + credential compare method)
├── routes/              # HTTP routers
│   ├── authRoutes.js         # Routes for registration, login, and profile
│   └── employeeRoutes.js     # Routes for CRUD operations (guarded by protect/authorize)
├── .env                 # Environment variables configuration
├── db.js                # Database connection helper
├── package.json         # Dependencies & scripts metadata
├── seed.js              # Script to populate database with default accounts
└── server.js            # Express application bootstrap & server runner
```

---

## Getting Started

### 1. Prerequisite Installations
Ensure you have [Node.js](https://nodejs.org/) (v16+) and a running instance of MongoDB (either locally or a MongoDB Atlas cloud URI).

### 2. Environment Setup
Create a file named `.env` in the `Backend/` directory and configure it as follows:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hrms
JWT_SECRET=hrms_secret_jwt_key_987654321
JWT_EXPIRE=24h
NODE_ENV=development
```

### 3. Install Dependencies
Change into the `Backend` directory and run:
```bash
npm install
```

### 4. Seed the Database
Pre-populate your database with a default Admin, Manager, and Employee user to immediately test authentication and RBAC permissions:
```bash
npm run seed
```

### 5. Run the Server
- **Development Mode** (with automated hot-reloading via nodemon):
  ```bash
  npm run dev
  ```
- **Production Mode**:
  ```bash
  npm start
  ```

---

## Seed Accounts (for Testing)

Use the following accounts to test the APIs or login through your frontend:

| Role | Email | Password | Allowed API Operations |
| :--- | :--- | :--- | :--- |
| **Admin** | `admin@hrms.com` | `password123` | Create employees, Delete employees, View all data, Edit all fields |
| **Manager** | `manager@hrms.com` | `password123` | View all data, Edit basic employee details (cannot change role or salary) |
| **Employee** | `employee@hrms.com` | `password123` | Access own profile route only |

---

## API Documentation

All request payloads should have `Content-Type: application/json`. Protected endpoints require an `Authorization` header with a valid Bearer token.

### Authentication Endpoints (`/api/auth`)

#### 1. Register a User
* **URL**: `/api/auth/register`
* **Method**: `POST`
* **Access**: Public
* **Payload**:
  ```json
  {
    "name": "Alex Smith",
    "email": "alex@hrms.com",
    "password": "password123",
    "role": "Employee",
    "department": "Marketing",
    "designation": "Social Media Manager",
    "phone": "555-0199",
    "salary": 50000
  }
  ```
* **Success Response (201 Created)**:
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "_id": "60b9c5f87b8f9e20a0ef1a5a",
      "name": "Alex Smith",
      "email": "alex@hrms.com",
      "role": "Employee",
      "department": "Marketing",
      "designation": "Social Media Manager",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
  }
  ```

#### 2. Login User
* **URL**: `/api/auth/login`
* **Method**: `POST`
* **Access**: Public
* **Payload**:
  ```json
  {
    "email": "admin@hrms.com",
    "password": "password123"
  }
  ```
* **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "message": "Login successful",
    "data": {
      "_id": "60b9c5f87b8f9e20a0ef1a59",
      "name": "System Admin",
      "email": "admin@hrms.com",
      "role": "Admin",
      "department": "Executive",
      "designation": "CEO / Founder",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
  }
  ```

#### 3. Get Logged-in User Profile
* **URL**: `/api/auth/profile`
* **Method**: `GET`
* **Access**: Private (Any logged-in user)
* **Headers**: `Authorization: Bearer <TOKEN>`
* **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "data": {
      "_id": "60b9c5f87b8f9e20a0ef1a59",
      "name": "System Admin",
      "email": "admin@hrms.com",
      "role": "Admin",
      "department": "Executive",
      "designation": "CEO / Founder",
      "phone": "1234567890",
      "salary": 150000,
      "joiningDate": "2026-06-19T08:00:00.000Z",
      "status": "Active"
    }
  }
  ```

---

### Employee Directory Management (`/api/employees`)

*Require `Authorization: Bearer <TOKEN>`*

#### 1. Get All Employees
* **URL**: `/api/employees`
* **Method**: `GET`
* **Access**: Private (Admin, Manager)
* **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "count": 3,
    "data": [
      { "_id": "...", "name": "System Admin", "role": "Admin", "email": "admin@hrms.com", ... },
      { "_id": "...", "name": "Sarah Manager", "role": "Manager", "email": "manager@hrms.com", ... }
    ]
  }
  ```

#### 2. Create Employee
* **URL**: `/api/employees`
* **Method**: `POST`
* **Access**: Private (**Admin Only**)
* **Payload**: Same as User Registration.
* **Success Response (201 Created)**: Returns employee metadata.

#### 3. Update Employee details
* **URL**: `/api/employees/:id`
* **Method**: `PUT`
* **Access**: Private (Admin, Manager)
* **Rule**: Managers cannot edit `salary` or `role` fields.
* **Payload**: Send any fields to update (e.g. `{"status": "On Leave"}`)
* **Success Response (200 OK)**: Returns updated employee record.

#### 4. Delete Employee
* **URL**: `/api/employees/:id`
* **Method**: `DELETE`
* **Access**: Private (**Admin Only**)
* **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "message": "Employee record deleted successfully"
  }
  ```
