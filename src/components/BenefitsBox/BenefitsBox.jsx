import React from 'react'
import BenefitsList from './BenefitsList'
function BenefitsBox() {
  return (
    <div className='flex justify-center'>
        <div className='text-lg bg-green-600 text-white font-bold w-64 rounded'>
            <div className='text-center'>
                Benefits of ACM
            </div>
            <BenefitsList/>
        </div>
    </div>
  )
}

export default BenefitsBox