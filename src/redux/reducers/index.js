//combine all reducer
import { combineReducers } from 'redux';




import reducerRooms from './reducerRooms'
import reducerLogin from './reducerLogin'
import reducerCheckin from './reducerCheckin'
import reducerCustomer from './reducerCustomer'

const appReducer = combineReducers({
  login: reducerLogin,
  rooms: reducerRooms,
  checkins: reducerCheckin,
  customers: reducerCustomer
})

export default appReducer