import React, { useReducer, useState } from "react";
import { userData } from "../constants/UserData";
import { userReducer } from "../reducers/userReducer";
export default function UserList() {
  const [users, dispatch] = useReducer(userReducer, userData);
  const [userInput, setUserInput]= useState({id:'', name:'',emai:''})
  const onUserInputChange = (e) =>{
    const {name,value} = e.target
    setUserInput({...userInput, [name]:value})
  }
  return (
    <div>
      {users.map((user) => (
        <>
          <p key={user.id}>{user.name}</p>
          <button onClick={()=>dispatch({type: "DELETE", data : {id : user.id}})}>삭제하기</button>
          {/* <button onClick={() => deleteUser(user.id)}>제거하기</button> */}
        </>
      ))}
      <input name="id" onChange={onUserInputChange}></input>
      <input name="name" onChange={onUserInputChange}></input>
      <input name="email" onChange={onUserInputChange}></input>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            data: userInput,
          })
        }
      >
        유저 추가
      </button>
      
    </div>
  );
}
