// server/server.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import movieRoutes from './routes/movie.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());  // For parsing application/json

// Routes
app.use('/api', movieRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/localflix', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});