import { PUSH_FOLDER, DELETE_FOLDER, UPDATE_FOLDER } from "./types"

export const createFolder = folderTitle => async dispatch => {
    dispatch({ type: PUSH_FOLDER, data: folderTitle })
}

export const deleteFolder = folder => async dispatch => {
    dispatch({ type: DELETE_FOLDER, data: folder.title })
}

export const updateFolder = (folder, folderUpdated) => async dispatch => {
    dispatch({ type: UPDATE_FOLDER, data: { folderID : folder.title, folderUpdated } })
}