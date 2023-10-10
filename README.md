# Attryb-buycar-project

This is the Attryb-buycar-project, where you can register, log in, and access restricted resources.

## API Documentation: for Swagger

You can explore the API documentation using Swagger UI. Access the documentation by navigating to:

https://attryb-backend-sbq1.onrender.com/api-docs

## Functionality

The API includes the following functionality:

- User Registration
- User Login and Authentication
- User details
- Car Management- create , update, delete,search

## Backend Deployment

The backend of this project is deployed on Render and can be accessed via the following link:

[Backend Deployment Link](https://attryb-backend-sbq1.onrender.com/)
## Frontend Deployment

The frontend of this project is deployed vercel and can be accessed via the following link:

[Frontend Deployment Link](https://attryb-project.vercel.app/)

## Backend-Routes

- **User Authentication**:
  - `POST /users/register`: Register a new user.
  - `POST /users/login`: Log in with a registered user.
  - `GET /users/`: Get all user details (jwt protected) .
  - `GET /users/{:id}`: Get  user details by userid (jwt protected) .
- **Car OEM Specs**:
  - `GET /carSpecs/`: List of all available Car OEM specs.(jwt protected).
  - `GET /carSpecs/{:id}`: Retrive a single car OEM specs by id.(jwt protected) .
  - `POST /carSpec/`: Add a new OEM Specs.(jwt protected) .
  - `PUT /carSpecs/{:id}`: Update OEM Specs details.(jwt protected) .
  - `DELETE /carSpecs/{:id}`: Delete a OEM Specs form database.(jwt protected) .
- **Car Inventory**:
  - `GET /carInventory/`: List of all available Car inventory details.(jwt protected).
  - `POST /carInventory/`: Add a new car detail in the inventory (jwt prltected).
  - `PUT /carInventory/{:id}`: Update a car inventory details.
  - `Delete /carInventory/{:id}`: Delete a car inventory details.

### Technologies Used

- Node.js
- React.js
- Express.js
- MongoDB
- Mongoose
- Bcrypt
- JWT
- Swagger (for API documentation)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Rubel011/attryb-project.git

   ```

2. Navigate to the project directory:
   ```bash 
   cd attryb-project
   cd server --backend
   cd frontend --React
   ```
3. Install the project dependencies:

   ```bash
   npm install

   ```

4. Create a .env file in the project'. server file and configure the following environment variables:

   ```markdown
   PORT=8080
   mongoUrl=database link
   SALT_ROUNDS=you salt rounds
   ACCESS_TOKEN_SECRET=masai_school
   REFRESH_TOKEN_SECRET=masai_refresh_token
   ```

5. Start the server:

   ```
   npm run server -backend
   npm start -React
   ```

6. Access the backend API at http://localhost:PORT.
