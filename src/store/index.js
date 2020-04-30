// 主要做关联导出store
import { createStore } from 'redux'; //从redux引入createStore方法
import reducer from '@/store/reducers'; //导入根reducers 

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
};
const myPersistReducer = persistReducer(persistConfig, reducer)
const store = createStore(myPersistReducer)

export const persistor = persistStore(store)
export default store;
