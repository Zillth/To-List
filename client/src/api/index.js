import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

// Create jwt
export const createJWT = content => API.post('/user/createJWT', content)

// Folder
export const createNewFolder = (token, name) => API.post('/folders', { token, name })
export const getFolders = (token) => API.get(`/folders/${token}`)
export const deleteFolderAPI = (token, id) => API.delete(`/folders/${token}/${id}`)
export const updateFolderAPI = (token, id, newName) => API.patch(`/folders/${token}/${id}`, newName)
export const pushItemAPI = (token, id, item) => API.post(`/folders/${token}/${id}`, { item })
export const deleteItemAPI = (token, id, items) => API.post(`/folders/${token}/${id}/deleteItem`, items)