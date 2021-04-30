import express from 'express'
import { createFolder, deleteFolder, getFolders, updateFolder, pushItem, deleteItem } from '../controllers/folders.js'

const router = express.Router()

router.post('/', createFolder)
router.get('/:token', getFolders)
router.patch('/:token/:id', updateFolder)
router.delete('/:token/:id', deleteFolder)
router.post('/:token/:id', pushItem)
router.post('/:token/:id/deleteItem', deleteItem)

export default router