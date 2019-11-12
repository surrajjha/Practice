import * as actionTypes from '../action'
const initialState= {
    results:[]
}

const reducer= (state=initialState,action) => {
    switch(action.type){
    
        
    case actionTypes.STORE_RESULT : 
    return {
       ...state,
       results:state.results.concat({id:new Date(),value:action.result})

    }
    case actionTypes.DELETE_RESULT:
      //  const id=2;
       // const newArr=[...state.results]
      //  newArr.splice(id,1)
      const updateArray=state.results.filter(result =>result.id!==action.resultElId);
        return {
            ...state,
            results:updateArray
        }
    }
    
return state;
};

export default reducer;