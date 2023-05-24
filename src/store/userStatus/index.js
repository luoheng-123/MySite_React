const store = {
    state:{

    },
    actions:{
        getUserInfo(newState,action){
            return newState 
        },
        setUserInfo(newState,action){
            console.log(action);
            return action.val 
        }
    },
    actionNames:{}
}
let actionNames = {}
for(let key in store.actions){
    actionNames[key] = key
}
store.actionNames = actionNames;
export default store;