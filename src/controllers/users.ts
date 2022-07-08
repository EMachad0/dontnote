import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class IndexController {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.json(await prisma.user.findMany())
  }

  public async add(req: Request, res: Response): Promise<Response> {
    try {
      await prisma.user.create({
        data: {
          name: 'Alice',
          email: 'alice@prisma.io',
          password: '0123456789',
        },
      })
    } catch (e) {
      return res.send(e)
    }
    return res.json({ status: 200 })
  }
}

export default new IndexController()
