import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import websiteRoutes from './app/routes/Website.routes';
import dashboardRoutes from './app/routes/Dashboard.routes';
import authRoutes from './app/routes/Auth.routes';
import v1ApiRoutes from './app/routes/v1/Api.routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Middleware for handling CORS
app.use(cors());

// Middleware for getting POST data in json format
app.use(express.json());

// Middleware for handling cookies
app.use(cookieParser());

// Middleware for managing sessions
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure to true for HTTPS
}));

app.use('/', websiteRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/auth', authRoutes);
app.use('/api/v1', v1ApiRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});