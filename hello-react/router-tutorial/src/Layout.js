import { useNavigate, Outlet } from "react-router-dom";
import React from "react";

export default function Layout() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goArticles = () =>{
    navigate('/articles', {replace : true});
  }

  return (
    <div>
      <header style={{ background: `lightgray`, padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록으로</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
