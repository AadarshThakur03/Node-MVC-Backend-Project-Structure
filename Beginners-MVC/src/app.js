// app.js
import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use('/api/users', userRoutes); // Use user routes for API calls
app.use('/api/admin', adminRoutes); // Use user routes for API calls

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
localhost:3000/api/users/getAllUser
localhost:3000/api/admin/deleteUser
