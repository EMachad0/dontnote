import { Request, Response } from 'express'

class IndexController {
  public async index (req: Request, res: Response): Promise<Response> {
    return res.json('User')
  }
}

export default new IndexController()

