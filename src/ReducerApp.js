import React, { useReducer } from "react";
const initialState = 0;
//reducer function takes two arguments - initial state and action. Returns the new state, that we get from useReducer() first result along with a dispatch method.
const reducer = (initialState, action)=>{
  switch(action.type){
    case 'increment':{
      return initialState+1
    }
    case 'decrement':{
      return initialState-1;
    }
    default:{
      return initialState
    }
  }
}

const ReducerApp = () => {
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
