import React from 'react'
import BenefitsItem from './BenefitsItem'
function BenefitsList() {
  return (
    <div className='flex-col mx-8 my-4 space-y-11'>
        <BenefitsItem text = "Access to an active community of dedicated students and alumni."/>
        <BenefitsItem text = "Interview prep, presentations from professors and alumni, guest speakers."/>
        <BenefitsItem text = "Project collaboration with peers that share the similar goals and interests."/>
    </div>
  )
}

export default BenefitsList