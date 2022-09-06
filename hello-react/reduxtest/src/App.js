import React from 'react';

const fields = [{
  key: 'id',
  label: 'id',
  placeholder: '6글자 이상 20글자 이하',
  initialValue: '',
  checkValid: (v) => v.length >= 6 && v.length <= 20,
}, {
  key: 'pw',
  label: 'password',
  placeholder: '12글자 이상 20글자 이하',
  initialValue: '',
  checkValid: (v) => v.length >= 12 && v.length <= 20,
}, {
  key: 'name',
  label: '이름',
  initialValue: '',
  placeholder: '아무이름',
  checkValid: (v) => v.length >= 1 && v.length <= 5,
}]

const App = () => { 
  const [values, setValues] = React.useState(fields.reduce((acc, { key, initialValue }) => ({ ...acc, [key]: initialValue }), {}));
  const refs = React.useRef(Array.from(Array(fields.length, () => null)));
  const valids = fields.map(({ key, checkValid }) => checkValid(values[key]));
  const isButtonDisabled = !Object.values(values).some(value => value.length);

  const handleClick = () => {
    const isAllValid = valids.every((isValid, i) => {
      const { key, initialValue, label } = fields[i];
      if (!isValid) {
        setValues(prev => ({
          ...prev,
          [key]: initialValue,
        }))
        refs.current[i].focus();
        alert(`유효하지 않은 ${label}입니다`);
      }
      return isValid;
    });
    if (!isAllValid) {
      return;
    }
    alert('회원가입 성공!');
  };

  const handleChangeValue = (e) => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  
  return (
    <div>
      {fields.map(({ key, label, placeholder }, i) => (
        <div key={key}>
          <input
            type="text"
            ref={ref => refs.current[i] = ref}
            name={key}
            value={values[key]}
            placeholder={placeholder}
            onChange={handleChangeValue}
          />
          {/* 에러메세지 자리 */}
          {!valids[i] && `유효하지 않은 ${label}입니다`}
        </div>
      ))}
      <button type="button" onClick={handleClick} disabled={isButtonDisabled}>회원가입</button>
    </div>
  );    
}

export default App;













// import { useRef } from "react";
// import { useState } from "react";
// import UserList from "./components/UserList";

// function App() {
//   const [ left, setLeft] = useState(0);
//   const [ right, setRight] = useState(0);
//   const [ result, setResult] = useState(0);
//   const input = useRef(null);

//   const handleChange = (e)=>{
//     setLeft(e.target.value);
//   }
//   const handleRightChange = (e)=>{
//     setRight(e.target.value);
//   }
//   const handleResult= ()=>{
//     setResult(+left + +right)
//   }
//   return (
//     // <UserList/>
//     <>
//       <input type='number' onChange={handleChange}/>+
//       <input type='number' onChange={handleRightChange}/>=
//       <input type='number' disabled value={result} ref={input}/>
//       <button type="button" onClick={handleResult}>계산</button>
//     </>
//   );
// }

// export default App;
