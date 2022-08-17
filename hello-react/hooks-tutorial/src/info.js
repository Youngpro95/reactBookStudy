import React, {useReducer} from 'react';
import useInputs from './useInputs';

// function reducer(state,action){
//   return{
//     ...state,
//     [action.name] : action.value
//   }
// }

const Info =()=>{
  const [state,dispatch]=useInputs({
    name : "",
    nickname:''
  })
  const {name, nickname} = state;
  // const onChange= (e)=>{
  //   dispatch(e.target)
  // }
  return(
    <div>
      <div>
        <input name="name" value={name} onChange={dispatch}/>
        <input name="nickname" value={nickname} onChange={dispatch}/>
      </div>
      <div>
        <b>이름 : </b> {name}
      </div>
      <div>
        <b>닉네임 : </b> {nickname}
      </div>
    </div>
  )
}

export default Info