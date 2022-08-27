export const INCREASE = "INCREASE"
export const DECREASE = "DECREASE"

export function Increase(diff) {
  return {
    type: INCREASE,
    payload : {diff},
  }
}
export function Decrease(diff) {
  return {
    type: DECREASE,
    payload : {diff},
  }
}

const initialState = {number : 0}

export default function counter(state=initialState, action){
  switch(action.type){
    case INCREASE:
      return {number : state.number + action.payload.diff}
    case DECREASE: 
      return {number : state.number - action.payload.diff}
    default:
      return state;
  }
}