import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

// Create jwt
export const createJWT = content => API.post('/user/createJWT', content)