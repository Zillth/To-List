import express from 'express'

const router = express.Router()

import { createJWT } from '../controllers/users.js'

router.post('/createJWT', createJWT)

export default router