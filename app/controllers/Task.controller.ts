import {Request, Response} from 'express';
import { Task } from '../types/Task';

async function getTaskById(req: Request, res: Response){
  var taskId: number = parseInt(req.params.taskId);
  var task: Task = {
    id: taskId,
    name: "Task 1",
    status: "Done"
  };
  res.json(task);
}

export default { getTaskById }