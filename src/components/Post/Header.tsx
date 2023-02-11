import { PostHeader } from '../../../types'
import threeDotOptions from '../../assets/three_dots_option.png'

export default function Header({owner, hasStory} : PostHeader) {

  return (
      <header className='flex justify-between items-center w-full py-2'>
        <div className='flex justify-between items-center space-x-2'>
          {hasStory ? (
            <div className={`p-0.5 bg-grad ${owner.closeFriend ? 'bg-green-400' : 'bg-gradient-to-tr from-orange-600 to-purple-600'}  rounded-full`}>
              <div className='p-0.5 bg-white rounded-full'>
                <img className='w-8 h-8 rounded-full' src={owner.user.image} alt={owner.user.name + "'s Story"} />
              </div>
            </div>
          ) : (

            <div className={`p-0.5 bg-grad rounded-full`}>
              <div className='p-0.5 rounded-full'>
                <img className='w-8 h-8 rounded-full' src={owner.user.image} alt={owner.user.name + "'s Story"} />
              </div>
            </div>

          )}
            <p className='flex justify-center items-center text-sm font-medium'>{owner.user.name} <span className='font-normal text-gray-500 px-2'>• 1d</span></p>
            {/* <img src="" alt="" /> */}
        </div>
        <img src={threeDotOptions} alt={owner.user.name + "'s Post Options"} />
      </header>
  )
}
