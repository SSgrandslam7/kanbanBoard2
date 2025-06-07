# Kanban Board

## Description

This is a full-stack Kanban Board application that allows users to manage tasks across status columns such as: "To Do", "In Progress", and "Done". The application was built using the MERN stack (MongoDB, Express, React, Node), and integrates secure JWT authentication, database interaction with Sequelize and PostgreSQL, and a responsive UI developed with Vite and TypeScript.

### Motivation

This application was constructed with the intention to deepen my understanding of full-stack web development and secure authentication workflows.

### What Did I Learn?

- Implementing JWT authentication in a React + Express environment
- Deploying full-stack apps on Render
- Using Sequelize to relate users to tickets
- Debugging server-client CORS and similar issues in production

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)

## Installation

To run this project locally:

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/kanbanBoard2.git
   cd kanbanBoard2
   ```

2. Install dependencies:

   ```bash
   npm run install
   ```

3. Create a `.env` file in the `server` directory:

   ```env
   DB_URL=your_postgresql_connection_string
   JWT_SECRET_KEY=your_secret_key
   ```

4. Seed the database:

   ```bash
   npm run seed
   ```

5. Build the project and start:

   ```bash
   npm run build
   npm start
   ```

## Usage

Visit the deployed site here: [Frontend (Static Site)](https://kanban-client-pitq.onrender.com)

Login using the seeded credentials:

```
Username: RadiantComet  
Password: password
```

You will be redirected to the dashboard where you can create, update, or delete tickets, and move them across the Kanban lanes.

## Features

- User login and JWT-protected routes
- CRUD operations on tickets
- Dynamic swimlanes by status
- PostgreSQL database management
- Full deployment to Render (both frontend and backend)

## Credits

This project was developed by Madeline. Built using resources from edX Boot Camps and documentation from the following:

- [Vite](https://vitejs.dev/)
- [Render](https://render.com/)
- [JWT](https://jwt.io/)
- [Sequelize](https://sequelize.org/)
- [TypeScript](https://www.typescriptlang.org/)

## License

This project is licensed under the MIT License, 2025, Stephen Schier

---

Thank you for reviewing my project!
