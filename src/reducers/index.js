import { combineReducers } from 'redux';

import userReducer from './user';
import errorReducer from './error';

const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
});

export default rootReducer;
