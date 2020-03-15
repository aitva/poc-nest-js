import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const start = process.hrtime();

    next();

    const d = this.getDurationInMs(start);
    console.log(`code=${res.statusCode} path=${req.path} duration=${d}`);
  }

  getDurationInMs(start: [number, number]): number {
    const nsPerSec = 1e9;
    const nsToMs = 1e6;
    const diff = process.hrtime(start);
    return (diff[0] * nsPerSec + diff[1]) / nsToMs;
  }
}
