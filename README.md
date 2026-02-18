# 🚀 User Portfolio API -- Backend + QA Automation Project

## 📌 Project Overview

This project is a production-style REST API built using **Node.js,
Express, and MongoDB**.\
It demonstrates both backend development and QA automation skills,
including JWT authentication, role-based authorization, manual API
testing, and automated test coverage.

------------------------------------------------------------------------

## 🛠 Tech Stack

-   Node.js
-   Express.js
-   MongoDB (Atlas)
-   JWT Authentication
-   Jest (Test Runner)
-   Supertest (API Automation)
-   dotenv (Environment Configuration)

------------------------------------------------------------------------

## 🔐 Core Features

-   User Registration & Login
-   JWT-based Authentication
-   Role-Based Authorization (Admin/User)
-   Protected Routes
-   Pagination, Filtering & Sorting
-   Centralized Error Handling
-   Environment-based Configuration

------------------------------------------------------------------------

## 🧪 Testing Implementation

### ✅ Manual Testing

-   Designed 40+ structured API test cases
-   Covered authentication, authorization, CRUD, and security scenarios
-   Created JIRA-style defect log documentation

### ✅ Automated API Testing

-   Implemented API automation using Jest & Supertest
-   Dynamic test data generation
-   Authentication & protected route validation
-   Coverage reporting enabled

Run tests:

    npm test

Run with coverage:

    npm test -- --coverage

------------------------------------------------------------------------

## 📂 Project Structure

    user-portfolio-api/
    │
    ├── src/
    │   ├── app.js
    │   ├── server.js
    │   ├── config/
    │   ├── controllers/
    │   ├── middleware/
    │   ├── models/
    │   └── routes/
    │
    ├── tests/
    │   ├── auth.test.js
    │   └── user.test.js
    │
    ├── test-cases/
    │   └── API_Test_Cases_40.xlsx
    │
    ├── defects/
    │   └── JIRA_Defect_Log.xlsx
    │
    ├── package.json
    ├── .gitignore
    └── README.md

------------------------------------------------------------------------

## ⚙️ Setup Instructions

1.  Clone the repository:

```{=html}
<!-- -->
```
    git clone <your_repository_url>

2.  Install dependencies:

```{=html}
<!-- -->
```
    npm install

3.  Create a `.env` file in the root directory:

```{=html}
<!-- -->
```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    PORT=3000

4.  Start the server:

```{=html}
<!-- -->
```
    npm start

------------------------------------------------------------------------

## 🎯 Learning Outcomes

-   REST API Design & Architecture
-   JWT Security Implementation
-   Role-Based Access Control (RBAC)
-   Manual API Test Case Design
-   Automated API Testing Setup
-   Code Coverage Analysis
-   Defect Documentation Practices

------------------------------------------------------------------------

## 👩‍💻 Author
Ritika Dhanda
