import {combineReducers} from 'redux';
import side from './side';
import home from './home';
import rssListModal from './rssListModal';
import itemList from './itemList';
import settingsModal from './settingsModal';

const reducer = combineReducers({side, home, rssListModal, itemList, settingsModal});

export default reducer;
