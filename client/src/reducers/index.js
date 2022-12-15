import {combineReducers} from 'redux';
import categoryReducer from './categoryReducers';

export default combineReducers({
    categories:categoryReducer
});