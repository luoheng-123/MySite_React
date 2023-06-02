const store = {
    state:{
        data:[],
        videoTotal:0
    },
    actions:{
        // getUserArticle(newState,action){
        //     return newState 
        // },
        setVideoData(newState,action){
            console.log(newState,action);
            return {data:action.val.data,videoTotal:action.val.videoTotal}
        },

    },
    actionNames:{}
}
let actionNames = {}
for(let key in store.actions){
    actionNames[key] = key
}
store.actionNames = actionNames;
export default store;