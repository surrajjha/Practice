const redux=require('redux');
const createStore=redux.createStore;

const initialState = {
    counter:0
}
// Reducer
const Rootreducer =(state=initialState,action) => {
    if(action.type =='INC_COUNTER'){
        return {
            ...state,
            counter:state.counter+1
        }
    }
    if(action.type =='ADD_COUNTER'){
        return {
            ...state,
            counter:state.counter+action.value
        }
    }
    return state;
};

// store
const store=createStore(Rootreducer);
console.log(store.getState());

//subscription 

store.subscribe(()=> {
    console.log('[Subscripton]',store.getState());
});

// dispatching action
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value:10})
console.log(store.getState());

