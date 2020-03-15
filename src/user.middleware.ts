import { Request, Response } from 'express';

export function user(req: Request, res: Response, next: Function) {
  req.user = { name: 'Kiki' };
  next();
}
