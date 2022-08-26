import { Outlet } from "react-router-dom";
import React from 'react'

export default function Layout() {
  return (
    <div>
      <header style={{background: `lightgray`, padding : 16, fontSize : 24}}>
        Header
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}
