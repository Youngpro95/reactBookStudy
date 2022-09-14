import React from 'react'

export default function PostList({posts}) {
  return (
    <ul>
      {posts.map(post=>{
        return(
        <li key={post.id}>
          {post.title}
        </li>)
      })}
    </ul>
  )
}
