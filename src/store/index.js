import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';

import authMW from '../middlewares/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMW),
);

const store = createStore(reducer, enhancers);

export default store;
