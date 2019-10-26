//combine all reducer
import { combineReducers } from 'redux';




import reducerRooms from './reducerRooms'
import reducerLogin from './reducerLogin'
import reducerCheckin from './reducerCheckin'

const appReducer = combineReducers({
  login: reducerLogin,
  rooms: reducerRooms,
  checkins: reducerCheckin
})

export default appReducer