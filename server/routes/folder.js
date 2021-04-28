import express from 'express'
import { createFolder, deleteFolder, getFolders, updateFolder } from '../controllers/folders.js'

const router = express.Router()

router.post('/', createFolder)
router.get('/:token', getFolders)
router.patch('/:folderId', updateFolder)
router.delete('/:folderId', deleteFolder)

export default router