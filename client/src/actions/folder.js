import { PUSH_FOLDER, DELETE_FOLDER, UPDATE_FOLDER, DELETE_ITEMS, PUSH_ITEM, SET_FOLDERS } from "./types"
import { createNewFolder, getFolders, deleteFolderAPI, updateFolderAPI } from '../api'

const token = JSON.parse(localStorage.getItem("profile")).token

export const createFolder = folderTitle => async dispatch => {
    const { data } = await createNewFolder(token, folderTitle)
    dispatch({ type: PUSH_FOLDER, data })
}

export const getFoldersUser = () => async dispatch => {
    const { data } = await getFolders(JSON.stringify(token.data))
    dispatch({ type: SET_FOLDERS, data })
}

export const deleteFolder = folder => async dispatch => {
    const { data } = await deleteFolderAPI(JSON.stringify(token.data), folder._id)
    data.state && dispatch({ type: DELETE_FOLDER, data: folder.title })
}

export const updateFolder = (folder, folderUpdated) => async dispatch => {
    const { data } = await updateFolderAPI(JSON.stringify(token.data), folder._id, folderUpdated)
    data.state && dispatch({ type: UPDATE_FOLDER, data: { folderID: folder.title, folderUpdated } })
}

export const deleteItems = (folder, items) => async dispatch => {
    dispatch({ type: DELETE_ITEMS, data: { folderID: folder.title, items } })
}

export const pushItem = (folder, item) => async dispatch => {
    dispatch({ type: PUSH_ITEM, data: { folderID: folder.title, item } })
}