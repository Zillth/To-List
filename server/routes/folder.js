import express from 'express'
import { createFolder, deleteFolder, getFolders, updateFolder } from '../controllers/folders.js'

const router = express.Router()

router.post('/', createFolder)
router.get('/:token', getFolders)
router.patch('/:token/:id', updateFolder)
router.delete('/:token/:id', deleteFolder)

export default router