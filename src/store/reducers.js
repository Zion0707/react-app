// 这里主要存数据
import { CHANGE_MESSAGE } from '@/store/actions';

//定义默认状态
let initState = {
    todos: [
		{
			id: parseInt(Math.random() * 10000000),
			isComplete: true,
			title: '学习redux'
		}, {
			id: parseInt(Math.random() * 10000000),
			isComplete: true,
			title: '学习react'
		}, {
			id: parseInt(Math.random() * 10000000),
			isComplete: false,
			title: '学习node'
		}
	],
	message:'Redux 默认值'
};

function reducer( state = initState, action ){
	// 深拷贝对象返回新对象
	let newState = JSON.parse(JSON.stringify( initState ));
	// 根据相关type更新其它事情
	switch ( action.type ) {
		case CHANGE_MESSAGE:
			newState.message = action.data
		break;
		default:
		  	newState = state;
		  	break;
	}
	
    return newState;
}
export default reducer;