import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';

import authMW from '../middlewares/auth';
import eventMW from '../middlewares/event';
import gameMW from '../middlewares/game';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMW, eventMW, gameMW),
);

const store = createStore(reducer, enhancers);

export default store;
