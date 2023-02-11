import React from 'react'
import heartIcon from '../../assets/heart_icon.png'
import commentIcon from '../../assets/comment_icon.png'
import shareIcon from '../../assets/share_icon.png' 
import bookmarkIcon from '../../assets/bookmark_icon.png'

export default function ActionBar() {
  return (
    <div className='flex justify-between items-center w-full py-2'>
        <div className='flex justify-items-center items-center space-x-4'>
        <img src={heartIcon} alt="Like" />
        <img src={commentIcon} alt="Comment" />
        <img src={shareIcon} alt="Share" />
        </div>
        <img src={bookmarkIcon} alt="Bookmark" />
    </div>
  )
}
