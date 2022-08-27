import React, { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const onSecondsChange = (e) =>{
    const {value} = e.target;
    setSeconds(value)
  }
  
  useEffect(() => {
    if (isClicked){
      const countDown = setTimeout(()=>{
        if(seconds>0){
          setSeconds(seconds-1)}
        else if (seconds===0){
          clearTimeout(countDown)
        }},1000)
      
    }
  }, [seconds,isClicked]);

  return (
    <div>
      <h1>타이머</h1>
      <h1>{seconds}</h1>
      <input onChange={onSecondsChange}></input>
      <button onClick={()=>setIsClicked(true)}>타이머 시작</button>
      <button onClick={()=>setIsClicked(false)}>타이머 중지</button>
    </div>
  );
}
