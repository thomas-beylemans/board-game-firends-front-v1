import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';

import userMW from '../middlewares/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(userMW),
);

const store = createStore(reducer, enhancers);

export default store;
