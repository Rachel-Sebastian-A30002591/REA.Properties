import { call, put, takeLatest } from 'redux-saga/effects';

import axios from 'axios';
import { PROPERTY_FETCH, PROPERTY_FETCH_FAILED, PROPERTY_FETCH_SUCCESS } from '../../types';

export function* propertyWatcherSaga() {
    yield takeLatest(PROPERTY_FETCH, propertyWorkerSaga);
}


 export function* propertyWorkerSaga() {
    try {
        const response = yield call(fetchPropertyData);
        const payload = response.data;
        yield put({ type: PROPERTY_FETCH_SUCCESS, payload });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: PROPERTY_FETCH_FAILED, error });
    }
}

/**
 * Here Fetch API is used but we can use Axios instead of this.
 */
/* function* fetchFlightData() {
    try {
        console.log('Fetching  Data');
        const response = yield fetch('http://www.json-generator.com/api/json/get/bVfJPGNqEO?indent=2');
        const payload =  response.data; 
         yield put({ type: PROPERTY_FETCH_SUCCESS, payload });
        return responseJson;
    } catch (error) {
        yield put({ type: PROPERTY_FETCH_FAILED });
        return null;
    }
} */

/**
 * Using Axios
 */
export function fetchPropertyData() {
    return axios({
        method: "get",
        url: "https://www.json-generator.com/api/json/get/bVfJPGNqEO?indent=2"
    });
}