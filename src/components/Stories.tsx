import React from 'react'
import { Story } from '../../types'
import StoryComponent from './StoryComponent'

interface Props {
  stories: Story[]
}

export default function Stories({ stories }: Props) {

  return (
    <div className='flex items-center justify-start p-4 overflow-x-hidden space-x-5'>
      {stories.map(({user, closeFriend}, index) => {
        return (
          <StoryComponent key={index} user={user} closeFriend={closeFriend} />
        )
      })}
    </div>
  )
}
