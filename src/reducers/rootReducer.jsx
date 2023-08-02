
import { combineReducers } from 'redux';
import productReducer from './productReducer';


const rootReducer = combineReducers({
  prod: productReducer,

});

export default rootReducer;