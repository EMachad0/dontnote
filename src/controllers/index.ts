import { Request, Response } from 'express'

class IndexController {
  public async index(req: Request, res: Response) {
    res.json('index')
  }
}

export default new IndexController()
