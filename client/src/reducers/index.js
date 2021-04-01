import { combineReducers } from 'redux'

import { user } from './user'
import { folders } from './folders'

export const reducers = combineReducers({ user, folders })