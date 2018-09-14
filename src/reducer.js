// 合并所有的reducer 并且返回
import { combineReducers } from 'redux'
import { counter } from './redux/index.redux.js'
import { auth } from './redux/Auth.redux.js'
import { bg } from './redux/bg.redux.js'

export default combineReducers({ counter, auth, bg })