import { combineReducers, createStore } from 'redux';
import addressData from './addressData';

const rootReducer = createStore(combineReducers({
    addressData,
}));

export default rootReducer;