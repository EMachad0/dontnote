import express from 'express'
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
    this.express.use(function (req, res, next) {
      next(createError(404))
    })

    // error handler
    // TODO: look-up express error handler ts types
    // @ts-ignore
    // eslint-disable-next-line no-unused-vars
    this.express.use(function (err, req, res, _) {
      // set locals, only providing error in development
      res.locals.message = err.message
      res.locals.error = req.app.get('env') === 'development' ? err : {}

      // render the error page
      res.status(err.status || 500)
      res.json('error')
    })
  }
}

export default new App().express
