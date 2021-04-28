import { DELETE_FOLDER, DELETE_ITEMS, PUSH_FOLDER, PUSH_ITEM, SET_FOLDERS, UPDATE_FOLDER } from "../actions/types"

const initialState = []

export const folders = (state = initialState, action) => {
    const folder = state[state.findIndex(folder => folder.title === action.data.folderID)]
    switch (action.type) {
        case PUSH_FOLDER:
            if (state.find(folder => folder.title === action.data.folder.title)) {
                return [...state]
            } else {
                return [...state, {...action.data.folder}]
            }
        case SET_FOLDERS:
            return [...action.data.folders]
        case DELETE_FOLDER:
            return state.filter(folder => folder.title !== action.data)
        case UPDATE_FOLDER:
            state[state.findIndex(folder => folder.title === action.data.folderID)] = action.data.folderUpdated
            return [...state]
        case DELETE_ITEMS:
            state[state.findIndex(folder => folder.title === action.data.folderID)].elements = folder.elements.filter(item => !action.data.items.includes(item))
            return [...state]
        case PUSH_ITEM:
            if(folder.elements.find(element => element === action.data?.item)) return state
            else {
                folder.elements.push(action.data.item)
                return [...state]
            }
        default:
            return state
    }
}