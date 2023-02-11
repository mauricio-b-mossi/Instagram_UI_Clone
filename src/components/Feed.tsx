import React from 'react'
import { Post } from '../../types'
import PostComponent from './Post'

interface Props{
  posts : Post[]
}

export default function Feed({posts} : Props) {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      {posts.map(({owner, post, description, likes, comments, hasStory})=> {
        return (
          <PostComponent owner={owner} post={post} description={description} likes={likes} comments={comments} hasStory={hasStory}/>
        )
      })}
    </div>
  )
}
