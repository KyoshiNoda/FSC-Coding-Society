import React from 'react'
import BenefitsBox from '../BenefitsBox/BenefitsBox'
function Hero() {
  return (
    <div className='flex justify-center bg-[url("https://www.farmingdale.edu/digital-swag/images/desktop-wallpaper/wallpaper-photo-ward.jpg")] shadow bg-color-black'>
        <div className='flex-col align-bottom'>
            <div className='text-white font-bold bg-green-900'>
                Support your technological interests.<br/>
                Expand your computer knowledge.<br/>
                Explore and Innovate.<br/>
                Share Ideas.
            </div>
            <div className='flex justify-center'>
                <button class="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Get Involved!
                </button>
            </div>
        </div>
        <BenefitsBox/>
    </div>
  )
}

export default Hero