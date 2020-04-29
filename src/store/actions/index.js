import { CHANGE_MESSAGE } from '@/store/actions/action-types';

let actions = {
    addTodo: function(payload) {
        return {type: CHANGE_MESSAGE, payload};
    }
};
  
export default actions;