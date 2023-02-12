import React from 'react'
import { Post } from '../../types'
import Header from './Post/Header'
import dummyImage from '../assets/dummy_image.jpeg'
import ActionBar from './Post/ActionBar'
import DescriptionParser from './Post/DescriptionParser'
import {commaSeparated} from '../../utils'

export default function PostComponent({ owner, post, description, likes, comments, hasStory }: Post) {
  return (
    <div className='flex flex-col justify-center items-center max-w-md'>
      {/* Post Header */}
      <Header owner={owner} hasStory={hasStory} />
      <img className='aspect-square' src={dummyImage} alt={owner.user.name + "'s Post"} />
      <ActionBar />
      {/* Need to implement like number to comma based. */}
      <p className='flex items-start w-full text-sm font-medium'>{commaSeparated(likes.toString())} likes</p>
      <DescriptionParser name={owner.user.name} description={description} />
      <p className='text-sm font-normal text-gray-500 w-full flex items-start py-1'>
        View all {comments} comments
      </p>
    </div>
  )
}
