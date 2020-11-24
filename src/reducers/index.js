import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';
import peopleReducer from './people';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  people: peopleReducer,
})

export default rootReducer
