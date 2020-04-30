// 这里主要存数据
import { CHANGE_MESSAGE, DELETE_TODO } from '@/store/actions';
//定义默认状态
let initState = {
    todos: [
		{
			id:1,
			name:'todo1'
		},
		{
			id:2,
			name:'todo2'
		},
	],
	message:'Redux 默认值'
};

function reducer( state = initState, action ){
	// 深拷贝对象返回新对象
	let newState = { ...initState };
	// 根据相关type更新其它事情
	switch ( action.type ) {
		case CHANGE_MESSAGE:
			newState.message = action.data;
		break;
		case DELETE_TODO:
			newState.todos = [ ...action.data ];
		break;
		default:
		  	newState = state;
		  	break;
	}
	
    return newState;
}
export default reducer;