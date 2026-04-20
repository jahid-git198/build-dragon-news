import React from 'react'
import logo from '../../assets/logo.png'
import { format } from 'date-fns'

function Header() {
  return (
      <div className=' gap-3 flex flex-col justify-center relative items-center '>
              <img className='w-100 h-12.5 mt-5' src={logo} alt="" />
              <p className='  relative text-[#706F6F]  text-[18px] '>Journalism Without Fear or Favour</p>
              <p className=' text-[#706F6F] font-medium text-[20px]'>
                {format(new Date(), "EEEE , LLLL dd , yyyy")}</p>
    
            </div>
  )
}

export default Header
