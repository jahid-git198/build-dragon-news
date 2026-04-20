import React from 'react'
import { FaFacebookF, FaGithub, FaGooglePlus, FaInstagramSquare, FaTwitter } from 'react-icons/fa'

function Rigth() {
  return (
    <div >
      <div className=' flex flex-col gap-4   '>
        <h1>Login With</h1>
        <button className=' btn btn-outline   flex  gap-2 btn-primary'> <FaGooglePlus></FaGooglePlus> Login With google </button>
        <button className=' btn btn-outline  text-white gap-2 btn-secondary'>  <FaGithub />Login With  github </button>
      </div>

      <div className='mt-10 gap-5 flex flex-col'>
        <h3 className='text-[#cac2c2]'>Find Us on </h3>
        <div className="w-full flex flex-col gap-3">

          <button className="btn bg-white text-black justify-start gap-2 px-6">
            <FaFacebookF /> Facebook
          </button>

          <button className="btn bg-white text-black justify-start gap-2 px-6">
            <FaTwitter /> Twitter
          </button>

          <button className="btn bg-white text-black justify-start gap-2 px-6">
            <FaInstagramSquare /> Instagram
          </button>

        </div>
      </div>
    </div>
  )
}

export default Rigth
