import commentReducer from 'store/reducers/commentReducer';
import { combineReducers } from 'redux';

export default combineReducers({comments: commentReducer});

