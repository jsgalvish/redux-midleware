import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';

const myLogger = (store) => (next) => (action) => {
  console.log('Logged Action:', action);
  next(action);
};

const store = createStore(
  combineReducers({ mathReducer, userReducer }),
  applyMiddleware(myLogger, logger, thunk, promise),
);

store.subscribe(() => {
  // console.log('Store Update', store.getState());
});

export default store;
