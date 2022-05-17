import { combineReducers } from 'redux';

import userReducer from './user';
import errorReducer from './error';
import eventReducer from './event';
import eventDetails from './eventDetails';

const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  event: eventReducer,
  eventDetails : eventDetails,
});

export default rootReducer;
