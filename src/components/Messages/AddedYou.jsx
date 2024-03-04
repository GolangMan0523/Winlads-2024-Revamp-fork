import React from 'react'

const AddedYou = ({mobileNum = '123456789'}) => {
  return (
    <div className='p-2 text-center border border-1 border-black bg-white text-lg rounded-full'>
        {mobileNum} AddedYou
    </div>
  )
}

export default AddedYou