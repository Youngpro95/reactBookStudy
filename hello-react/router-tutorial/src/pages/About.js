import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export default function About() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const detail = searchParams.get('detail');
  const mode =searchParams.get('mode')
  const onToggleDetail = () =>{
    setSearchParams({mode, detail : detail ==='true'? false : true})
  }
  const onIncreaseMode = () =>{
    const nextMode = (mode === null ? 1 : parseInt(mode) + 1);
    setSearchParams({mode : nextMode , detail})
  }
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 테스트</p>
      <p>쿼리스트링 : {location.search}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
}
