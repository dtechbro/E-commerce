import { assets } from '../assets/frontend_assets/assets';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <main className="flex items-center justify-between py-5 font-medium">

      <img
        src={assets.logo}
        alt="brand-logo"
        className='w-36'
      />

      <ul className='w-[200px] flex gap-5 text-sm text-gray-700'>
        <NavLink
          to='/'
          className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink
          to='/collection'
          className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink
          to='/about'
          className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink
          to='/contact'
          className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>
      
      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="serach-icon" />

        <div className='group relative'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />

          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>

          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
          </Link>
        </div>
      </div>
    </main>
  )
}