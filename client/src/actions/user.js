import { SIGNIN, SET_USER } from './types'
import { createJWT } from '../api/index'
import decode from 'jwt-decode'

export const logIn = user => async dispatch => {
    const token = await createJWT(user)
    const data = { user, token }
    dispatch({ type: SIGNIN, data })
}

export const setUser = token => async dispatch => {
    const decodeToken = decode(token)
    Boolean(decodeToken.exp * 1000 > new Date().getTime()) ? dispatch({ type: SET_USER, data: decodeToken }) : localStorage.removeItem('profile')
}