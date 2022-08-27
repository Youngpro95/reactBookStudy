import React,{useState} from 'react'

export default function Login() {
  const [userInput, setUserInput] = useState({id:'',pw:''});
  
  const onUserInputChange = (e) =>{
    const {name, value} = e.target;
    setUserInput({...userInput,[name]:value});
  }

  const doLogin = () =>{
    alert('로그인 완료')
  }
  console.log(userInput);

  return (
    <div>
      <input name="id" placeholder='아이디를 입력하세요.' onChange={onUserInputChange}></input>
      <input name="pw" placeholder='비밀번호를 입력하세요.' onChange={onUserInputChange}></input>
      <button onClick={doLogin}>로그인</button>
    </div>
  )
}
