// 主要做关联导出store
import { createStore } from 'redux'; //从redux引入createStore方法
import reducer from '@/store/reducers'; //导入根reducers 

import {persistStore, persistReducer} from 'redux-persist';
import session from 'redux-persist/lib/storage/session'; //存储方式 session ， storage， cookie
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage: session,
    stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};
const myPersistReducer = persistReducer(persistConfig, reducer)
const store = createStore(myPersistReducer)

export const persistor = persistStore(store)
export default store;
