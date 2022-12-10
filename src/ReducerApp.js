import React, { useReducer } from "react";
const initialState = 0;
//reducer function takes two arguments - state that comes and action. Returns the new state, that we get from useReducer() first result along with a dispatch method.
const reducer = (state, action)=>{
  switch(action.type){
    case 'increment':{
      return state+1
    }
    case 'decrement':{
      return state-1;
    }
    default:{
      return state
    }
  }
}

const ReducerApp = () => {
  //initially state is initialState
  const [state, dispatch]=useReducer(reducer, initialState)
  return (
    <div
      style={{
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{ margin: 20 }}
        onClick={()=>dispatch({type: 'increment'})}
      >
        Increment Me
      </button>
      <button
        style={{ margin: 20 }}   
        onClick={()=>dispatch({type: 'decrement'})}   
      >
        Decrement Me
      </button>
      <div>{state}</div>
    </div>
  );
};

export default ReducerApp;
