import { combineReducers } from 'redux'
import characterStats from './characterStats'
import characterGeneral from './character'

export default combineReducers({
  characterStats,
  characterGeneral
})