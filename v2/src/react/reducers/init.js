import {combineReducers} from 'redux';
import side from './side';
import home from './home';
import rssListModal from './rssListModal';

const reducer = combineReducers({side, home, rssListModal});

export default reducer;
