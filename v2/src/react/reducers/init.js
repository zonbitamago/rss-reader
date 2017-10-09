import {combineReducers} from 'redux';
import side from './side';
import home from './home';

const reducer = combineReducers({side, home});

export default reducer;
