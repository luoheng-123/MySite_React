import handler from './index'


const reducer = (state = {...handler.state}, action) => {
    for (const key in handler.actionNames) {
        if (action.type === handler.actionNames[key]) {
            state = handler.actions[action.type](state,action)
            break;
        }
    }
    return {...state}
}

export default reducer