import { CHANGE_MESSAGE } from '@/store/actions/action-types';

//定义默认状态
let initState = {
    todos: [
		{
			id: parseInt(Math.random() * 10000000),
			isComplete: false,
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
	message:'Redux 理解'
};

function reducer(state=initState,action){
	let newState;
	switch (action.type) {
		case CHANGE_MESSAGE:
			newState = {
				message: action.payload
			};
		break;
		default:
		  	newState = state;
		  	break;
	  }

    return newState;
}
export default reducer;