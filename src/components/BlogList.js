import React from 'react'

export default function BlogList({posts}) {
    // Helper function implicitly returns an <li>
    const listItems = Object.values(posts).map( id=>{
    const theBlogPost = posts[id];
    return <li>{theBlogPost.title} - {id}</li>
  });
  return (
    <ol>
        {listItems}
    </ol>
  )
}
