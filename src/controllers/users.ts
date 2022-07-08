import { Request, Response, NextFunction } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class IndexController {
  public async index(req: Request, res: Response, next: NextFunction) {
    prisma.user.findMany().then((users) => res.json(users), next)
  }

  public async add(req: Request, res: Response, next: NextFunction) {
    await prisma.user
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
