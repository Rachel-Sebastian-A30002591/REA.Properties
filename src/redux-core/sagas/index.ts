import { all } from 'redux-saga/effects';
import { propertyWatcherSaga } from './property'

/**
 * Redux Saga Middleware used in this framework for Managing Side Effects or Unpredicatble Behaviors
 * eg Async Calls
 */
export function* rootSaga() {
  yield all([
    propertyWatcherSaga()
  ]);
}