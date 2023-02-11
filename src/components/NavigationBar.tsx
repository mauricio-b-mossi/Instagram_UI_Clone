import React from 'react'
import house from '../assets/house_icon.png'
import explore from '../assets/explore_icon.png'
import reels from '../assets/reels_icon.png'
import post from '../assets/post_icon.png'
import messages from '../assets/messages_icon.png'
import profilepicture from '../assets/profile_picture.jpg'

export default function NavigationBar() {
    return (
        <div className='absolute bottom-0 w-full flex items-center justify-around py-3 border-t border-gray-300'>
            <img className='h-6 w-6' src={house} alt="" />
            <img className='h-6 w-6' src={explore} alt="" />
            <img className='h-6 w-6' src={reels} alt="" />
            <img className='h-6 w-6' src={post} alt="" />
            <img className='h-6 w-6' src={messages} alt="" />
            <img className="h-6 w-6 rounded-full" src={profilepicture} alt="" />
        </div>
    )
}
