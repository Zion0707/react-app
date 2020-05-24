// redux 模块化
import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import homeReducer from '@/pages/home/reducer';

const persistConfig = {
    key: 'root',
    storage: storage,
};

const reducers = combineReducers({
    // home 模块数据
    home: homeReducer,
    // 往下添加其它模块
});

const myPersistReducer = persistReducer(persistConfig, reducers);
const store = createStore(myPersistReducer);
export const persistor = persistStore(store);
export default store;
