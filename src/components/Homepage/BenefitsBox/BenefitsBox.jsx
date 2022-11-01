import React from 'react'
import BenefitsList from './BenefitsList'
function BenefitsBox() {
  return (
    <div className='flex justify-center'>
        <div className='text-lg bg-green-400 text-white font-bold w-96 rounded'>
            <div className='text-center'>
                Benefits of ACM
            </div>
            <BenefitsList/>
        </div>
    </div>
  )
}

export default BenefitsBox