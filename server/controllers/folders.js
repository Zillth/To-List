import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
import folderModel from '../models/folder.js'
import mongoose from 'mongoose'

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

export const deleteFolder = async (req, res) => {
    const { token, id } = req.params
    const { googleId } = jwt.verify(JSON.parse(token), process.env.TOKEN_SECRET)
    if (mongoose.isValidObjectId(id)) {
        const state = await folderModel.deleteOne({ _id: id, userId: googleId })
        res.status(200).json({ state })
    } else res.status(500)
}

export const updateFolder = async (req, res) => {
    const { token, id } = req.params
    const folderUpdated = req.body
    const { googleId } = jwt.verify(JSON.parse(token), process.env.TOKEN_SECRET)
    if (mongoose.isValidObjectId(id)) {
        const state = await folderModel.updateOne({ _id: id, userId: googleId }, folderUpdated)
        res.status(200).json({ state })
    } else res.status(500)
}

export const getFolders = async (req, res) => {
    const { token } = req.params
    const { googleId } = jwt.verify(JSON.parse(token), process.env.TOKEN_SECRET)
    const folders = await folderModel.find({ userId: googleId })
    res.status(200).json({ folders })
}