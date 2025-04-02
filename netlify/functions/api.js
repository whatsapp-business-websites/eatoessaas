import express from 'express';
import serverless from 'serverless-http';
import { registerRoutes } from '../../server/routes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register all the routes
registerRoutes(app);

// Export the serverless function
export const handler = serverless(app);
