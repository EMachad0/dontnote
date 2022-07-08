import express, { Request, Response, NextFunction } from 'express'
import createError from 'http-errors'
import logger from 'morgan'

import routes from './routes'

class App {
  public express: express.Application

  constructor() {
    this.express = express()

    this.middlewares()
    this.routes()
    this.errors()
  }

  private middlewares() {
    this.express.use(logger('dev'))
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
  }

  private routes() {
    this.express.use(routes)
  }

  private errors() {
    this.express.use((_req: Request, _res: Response, next: NextFunction) => {
      next(createError(404))
    })

    // error handler
    this.express.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        // set locals, only providing error in development
        res.locals.message = err.message
        res.locals.error = req.app.get('env') === 'development' ? err : {}

        // render the error page
        res.status(500)
        next(err)
      }
    )
  }
}

export default new App().express
