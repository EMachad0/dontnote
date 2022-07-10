import { Request, Response, NextFunction } from 'express'
import { db } from '../db'

class IndexController {
  public async index(req: Request, res: Response, next: NextFunction) {
    db.user.findMany().then((users) => res.json(users), next)
  }

  public async add(req: Request, res: Response, next: NextFunction) {
    await db.user
      .create({
        data: {
          name: 'Alice',
          email: 'alice@prisma.io',
          password: '0123456789',
        },
      })
      .then((user) => res.json(user), next)
  }
}

export default new IndexController()
