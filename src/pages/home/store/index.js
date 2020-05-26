const home = (state = { list: [] }, action = {}) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newState = Object.assign({}, state);
            newState.list.push(action.playload);
            return newState;
        default:
            return state;
    }
};

export default home;
