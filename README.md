# Node.js Project Structure

This repository demonstrates a common and recommended folder structure for Node.js backend applications. Each file and folder serves a specific purpose in maintaining a clean, organized, and scalable codebase. The code inside is purely for demonstration purposes and can be modified as needed for your own projects.

I have created three different folder structures to suit different levels of experience:

- **Beginner**: A simple structure that follows the MVC (Model-View-Controller) pattern.
- **Intermediate**: Adds `middleware` and `services` folders for better separation of concerns.
- **Advanced**: Includes `utils` for shared functions and `tests` for unit testing, following industry best practices.

## Project Structure


## Folder and File Descriptions

- **/config/dbConfig.js**: This file holds the database configuration details, such as connection strings or settings required to connect to the database.
  
- **/controllers/**: This folder contains files that define the logic to handle incoming HTTP requests.
  - `userController.js`: Manages user-related operations like registration, login, and profile updates.
  - `adminController.js`: Manages admin-related operations such as user management and access control.

- **/models/**: This folder contains the database schemas or models used in the application.
  - `userModel.js`: Defines the schema for user data.
  - `adminModel.js`: Defines the schema for admin-related data.

- **/routes/**: This folder defines all the API routes/endpoints available for users and admins.
  - `userRoutes.js`: Contains routes accessible to users (e.g., login, signup, profile).
  - `adminRoutes.js`: Contains routes accessible to admins for user management and other admin tasks.

- **/middleware/**: Middleware files that process requests before they hit the controllers.
  - `authMiddleware.js`: Handles authentication and ensures that requests are made by authenticated users.
  - `validationMiddleware.js`: Validates incoming request data to ensure it conforms to expected formats.

- **/services/**: The service layer contains the core business logic.
  - `userService.js`: Contains the business logic for user operations (e.g., registration, login).
  - `adminService.js`: Contains the business logic for admin tasks (e.g., user management).

- **/utils/**: This folder contains utility/helper functions that are used across the project.
  - `dateUtils.js`: Functions related to date formatting and manipulation.
  - `tokenUtils.js`: Functions for handling token generation and validation.

- **/tests/**: Test files for validating the functionality of your services and controllers.
  - `userService.test.js`: Contains tests for user service methods.
  - `adminController.test.js`: Contains tests for admin controller routes and methods.

- **app.js**: The entry point of your application, where you initialize the server, set up middleware, and define your routes.

## Common Practice

This folder structure follows common industry practices to keep Node.js backend applications modular and scalable. Each folder has a specific responsibility, which makes it easier to maintain and scale the application as it grows.

### Note:
The code in this repository is **dummy code** meant to illustrate the structure. Feel free to modify or replace it with actual logic as needed for your project.
