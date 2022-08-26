import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>홈</h1>
      <p>홈페이지 메인</p>
      
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert</Link>
        </li>
        <li>
          <Link to="/profile/young">영민</Link>
        </li>
        <li>
          <Link to="/profile/void">없는 프로필</Link>
        </li>
      </ul>
    </div>
  )
}
