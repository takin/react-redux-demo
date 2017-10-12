import {combineReducers} from 'redux';
import UserReducer from './reducer-user';


const allReducers = combineReducers({
    users: UserReducer
});

export default allReducers;