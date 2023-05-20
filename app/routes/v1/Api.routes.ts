import express, { Router } from 'express';
import TaskController from '../../controllers/Task.controller';

const router : Router = express.Router();

const authenticate = (req:any, res:any, next:any) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

router.get('/task/:taskId', authenticate, TaskController.getTaskById);

export default router;