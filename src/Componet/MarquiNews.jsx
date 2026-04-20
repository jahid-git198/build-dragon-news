import React from 'react'
import Marquee from 'react-fast-marquee'

function MarquiNews() {
    return (
        <div className=' flex mt-5 rounded-2xl  mx-auto bg-[#F3F3F3] items-center gap-3 w-11/12 p-4 '>
            <button className='btn w-27  border-none h-10 text-[20px] text-[#FFFFFF] font-normal bg-[#D72050] '>latest</button>

            <Marquee>
                <p className=' text-[#403F3F] font-normal '>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>

            </Marquee>
        </div>

    )
}

export default MarquiNews
