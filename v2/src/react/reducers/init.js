import {combineReducers} from 'redux';
import side from './side';
import home from './home';
import rssListModal from './rssListModal';
import itemList from './itemList';

const reducer = combineReducers({side, home, rssListModal, itemList});

export default reducer;
