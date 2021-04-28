import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
import folderModel from '../models/folder.js'

export const createFolder = async (req, res) => {
    const { token, name } = req.body
    const { googleId } = jwt.verify(token.data, process.env.TOKEN_SECRET)
    if (!await folderModel.findOne({ userId: googleId, title: name })) {
        const folder = await folderModel.create({ userId: googleId, title: name })
        res.status(200).json({ folder })
    } else {
        res.status(500)
    }
}

export const deleteFolder = (req, res) => {

}

export const updateFolder = (req, res) => {

}

export const getFolders = async (req, res) => {
    const { token } = req.params
    const { googleId } = jwt.verify(JSON.parse(token), process.env.TOKEN_SECRET)
    const folders = await folderModel.find({ userId: googleId })
    res.status(200).json({ folders })
}