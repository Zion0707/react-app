import { createStore } from 'redux'; //从redux引入createStore方法
import rootReducer from '@/store/reducers'; //导入根reducers 

// 导出store
export default function configureStore(initialState){
    const store = createStore(rootReducer, initialState);
    return store;
}

