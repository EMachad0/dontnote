import { Router } from 'express'

const routes = Router()

import index from './controllers/index'

routes.get('/', index.index)

export default routes
