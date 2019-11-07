import { applyMiddleware, createStore } from 'redux';
import { default as Logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { default as rootReducer }    from './reducers';
import { rootSaga } from './sagas';

/**
 * Redux Store or Single source of truth
 */

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, Logger)
);

sagaMiddleware.run(rootSaga);

