import { combineReducers } from 'redux'
import characterStats from './characterStats'
import characterGeneral from './character'
import _raceModel from './static/_raceModel';

export default combineReducers({
  characterStats,
  characterGeneral,
  _raceModel
})