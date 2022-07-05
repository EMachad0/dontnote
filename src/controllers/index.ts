import { Request, Response } from 'express'

class IndexController {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.json('index')
  }
}

export default new IndexController()
