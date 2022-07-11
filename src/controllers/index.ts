import { Request, Response } from 'express'

class IndexController {
  public async index(req: Request, res: Response) {
    res.send('index')
  }
}

export default new IndexController()
