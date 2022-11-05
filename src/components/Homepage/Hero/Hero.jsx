import React from 'react';
function Hero() { 
  return (
    <div className=' bg-hero1 flex justify-center bg-cover items-end h-screen bg-no-repeat bg-center shadow-inner'>
        <div className='flex flex-col'>
            <div className='text-white font-bold text-5xl'>
                Support your technological interests.<br/>
                Expand your computer knowledge.<br/>
                Explore and Innovate.<br/>
                Share Ideas.
            </div>
            <div className='flex justify-center'>
                <button class="w-48 h-14 bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white font-bold py-2 px-4 rounded-full">
                    Get Involved!
                </button>
                
            </div>
        </div>
    </div>
  )
}

export default Hero