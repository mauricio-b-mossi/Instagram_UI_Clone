import React from 'react'
import { Story } from '../../types'

export default function StoryComponent({user, closeFriend }: Story) {
  return (
    <div className='flex flex-col justify-center items-center shrink-0 '>
      <div className={`p-0.5 bg-grad ${closeFriend ? 'bg-green-400' : 'bg-gradient-to-tr from-orange-600 to-purple-600'}  rounded-full`}>
        <div className='p-0.5 bg-white rounded-full'>
          <img className='w-16 h-16 rounded-full' src={user.image} alt={user.name + "'s Story"} />
        </div>
      </div>
      <p className='pt-1 text-xs'>{user.name.length > 11 ? user.name.slice(0, 11) + "..." : user.name}</p>
    </div>
  )
}
