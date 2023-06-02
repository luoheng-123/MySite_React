const store = {
    state:{
        data:[],
        articleTotal:0,
    },
    actions:{
        getUserArticle(newState,action){
            return newState 
        },
        setUserArticle(newState,action){
            console.log(newState,action);
            return {data:action.val.data,articleTotal:action.val.articleTotal}
        },
        setOnePageUserArticles(newState,action){
            console.log(newState,action);
            return {data:action.val.data,articleTotal:action.val.articleTotal}
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