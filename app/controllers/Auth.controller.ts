import {Request, Response} from 'express';

async function login(req: any, res: Response){
  req.session.user = {
    id: 1,
    username: 'john'
  };
  res.json({
    message: 'Login successful',
    user: req.session.user,
  });
}

export default { login }