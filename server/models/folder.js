import mongoose from 'mongoose'

const folderSchema = mongoose.Schema({
    userId: String,
    title: String,
    elements: {type: [String], default: []}
})

export default mongoose.model('Folder', folderSchema)