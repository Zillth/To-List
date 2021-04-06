import { DELETE_FOLDER, DELETE_ITEMS, PUSH_FOLDER, UPDATE_FOLDER } from "../actions/types"

const initialState = []

export const folders = (state = initialState, action) => {
    const folder = state[state.findIndex(folder => folder.title === action.data.folderID)]
    switch (action.type) {
        case PUSH_FOLDER:
            if (state.find(folder => folder.title === action.data)) {
                return [...state]
            } else {
                return [...state, { title: action.data, elements: [] }]
            }
        case DELETE_FOLDER:
            return state.filter(folder => folder.title !== action.data)
        case UPDATE_FOLDER:
            state[state.findIndex(folder => folder.title === action.data.folderID)] = action.data.folderUpdated
            return [...state]
        case DELETE_ITEMS:
            state[state.findIndex(folder => folder.title === action.data.folderID)].elements = folder.elements.filter(item => !action.data.items.includes(item))
            return [...state]
        default:
            return state
    }
}