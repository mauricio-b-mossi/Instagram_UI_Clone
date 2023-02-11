import igLogo from '../assets/ig_logo.png'
import seachIcom from '../assets/searchbar_icon.png'
import heartIcon from '../assets/heart_icon.png'

export default function Header() {
  return (
    <div className='flex items-center justify-between p-4 border-b border-gray-300'>
      <img className='h-7' src={igLogo} alt="Instagram Logo" />
      <div className='flex items-center justify-start w-60 py-2 px-3 rounded-md bg-gray-100'>
        <img className='h-3' src={seachIcom} alt="Search" />
        <p className='pl-3 text-sm font-light text-gray-400'>Search</p>
      </div>
      <img className='h-4' src={heartIcon} alt="Heart" />
    </div>
  )
}

