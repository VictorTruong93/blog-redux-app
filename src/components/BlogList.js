import React from 'react'

export default function BlogList({posts, handleClick}) {
    // Helper function implicitly returns an <li>
    const listItems = Object.values(posts).map( id=>{
    const theBlogPost = posts[id];
    return <li onClick={()=>{handleClick(id)}}>{theBlogPost.title} - {id}</li>
  });
  return (
    <ol>
        {listItems}
    </ol>
  )
}
