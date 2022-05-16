import { combineReducers } from 'redux';

import userReducer from './user';
import errorReducer from './error';
import eventReducer from './event';

const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  event: eventReducer,
});

export default rootReducer;
