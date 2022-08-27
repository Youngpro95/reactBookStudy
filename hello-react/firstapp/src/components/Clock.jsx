import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'

export default function Clock() {
  const [time, setTime] =useState(moment().format(`YYYY-MM-DD HH:mm:ss`));

  useEffect(()=>{
    setTimeout(()=>{setTime(moment().tz('Asia/Seoul').format(`YYYY-MM-DD HH:mm:ss`))},1000)
  }, [time])

  const changeTZ = (TZ) =>{
    setTime(moment.tz(TZ).format(`YYYY-MM-DD HH:mm:ss`));
  }

  return (
    <div>
      <h1>현재 시각</h1>
      <h1>{time}</h1>
      {/* <button onClick={()=>changeTZ('Asia/Seoul')}>서울 시간</button>
      <button onClick={()=>changeTZ('Asia/Taipei')}>대만 시간</button> */}
    </div>
  )
}
