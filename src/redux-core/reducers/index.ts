import { combineReducers } from 'redux';
import { propertyReducer } from './property'



const allReducers = {
  propertyReducer,
  //homeReducer
};

const rootReducer = combineReducers(allReducers);
export { rootReducer };
export default rootReducer;