import React from 'react'

const PartnerBox = ({ onClick,partner,currentSub }) => {
    return (
        <div className='relative  w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 cursor-pointer px-1 hover:brightness-95' onClick={() => onClick(partner)}>
            <div className='w-full rounded-xl overflow-hidden'>
                <img src={partner.logo ? partner.logo : 'https://icon-library.com/images/no-image-available-icon/no-image-available-icon-12.jpg'} className='w-full h-full object-cover' />
            </div>
            <div className='py-5'>
                <h3 className='text-lg text-black font-semibold capitalize'>{partner?.name && partner.name }</h3>
                <span className='text-gray-500 font-light text-sm'>Subtitle</span>
            </div>
            <div className='absolute top-1 right-1 p-1  rounded-full bg-white border text-xs font-semibold'>
                10% off on {currentSub && currentSub.name} Plan
            </div>
        </div>
    )
}
  
export default PartnerBox