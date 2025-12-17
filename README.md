Habit Tracker – MERN Stack Application

A full-stack habit tracking application built using the MERN stack.
Users can register, log in, create habits, track daily progress, and view basic insights.
This project demonstrates authentication, protected APIs, clean UI, and deployment readiness.

Backend
Tech Stack:

- Node.js

- Express.js

- MongoDB

- Mongoose

- JSON Web Tokens (JWT)

Authentication APIs:

- POST /api/auth/register
  Register a new user with name, email, and password

- POST /api/auth/login
  Authenticate user and return a JWT token

Habit APIs (Protected Routes):

- POST /api/habits
  Create a new habit for the logged-in user

- GET /api/habits
  Get all habits created by the logged-in user

- POST /api/habits/:id/checkin
  Mark today’s completion and update habit streak

- DELETE /api/habits/:id
  Delete a habit owned by the user

Backend Features:

-JWT-based authentication and authorization

- Middleware for protected routes

- User-specific data isolation

- Environment variables for secure configuration

- Deployed backend API

---

Frontend
Tech Stack:

- React.js

- Vite

- React Router

- Context API

Frontend Features:

- User registration and login

- Token storage and authenticated requests

- Dashboard with tab-based navigation

- Create habit form with inline UI

- Habit cards with progress bars and streak badges

- Mini calendar view for habit consistency

- Fully responsive layout for mobile and desktop

- Centralized API service for backend integration

---

Deployment

- Backend deployed as a standalone service

- Frontend deployed separately and connected via API URL

- Production environment configured using environment variables
