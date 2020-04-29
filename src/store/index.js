import { createStore } from 'redux'; //从redux引入createStore方法
import reducer from '@/store/reducers'; //导入根reducers 

// 导出store
let store = createStore(reducer);//传入reducer
export default store;
