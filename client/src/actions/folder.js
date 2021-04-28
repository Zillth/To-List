import { PUSH_FOLDER, DELETE_FOLDER, UPDATE_FOLDER, DELETE_ITEMS, PUSH_ITEM, SET_FOLDERS } from "./types"
import { createNewFolder, getFolders } from '../api'

export const createFolder = folderTitle => async dispatch => {
    const { data } = await createNewFolder(JSON.parse(localStorage.getItem("profile")).token, folderTitle)
    dispatch({ type: PUSH_FOLDER, data })
}

export const getFoldersUser = () => async dispatch => {
    const { data } = await getFolders(JSON.stringify(JSON.parse(localStorage.getItem("profile")).token.data))
    dispatch({ type: SET_FOLDERS, data })
}

export const deleteFolder = folder => async dispatch => {
    dispatch({ type: DELETE_FOLDER, data: folder.title })
}

export const updateFolder = (folder, folderUpdated) => async dispatch => {
    dispatch({ type: UPDATE_FOLDER, data: { folderID: folder.title, folderUpdated } })
}

export const deleteItems = (folder, items) => async dispatch => {
    dispatch({ type: DELETE_ITEMS, data: { folderID: folder.title, items } })
}

export const pushItem = (folder, item) => async dispatch => {
    dispatch({ type: PUSH_ITEM, data: { folderID: folder.title, item } })
}