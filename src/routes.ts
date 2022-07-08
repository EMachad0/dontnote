import { Router } from 'express'

const routes = Router()

import index from './controllers/index'
import users from './controllers/users'

routes.get('/', index.index)
routes.get('/users', users.index)
routes.get('/users/add', users.add)

export default routes
