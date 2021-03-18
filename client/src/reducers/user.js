import { SET_USER, SIGNIN } from '../actions/types'
const initialState = {
    email: '',
    googleId: '',
    imageUrl: '',
    name: ''
}
export const user = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN:
            localStorage.setItem('profile', JSON.stringify({ token: action.data?.token }))
            return { ...state, ...action.data?.user }
        case SET_USER:
            if (action.data === null) return { ...state, ...initialState }
            return { ...state, ...action.data }
        default:
            return state
    }
}