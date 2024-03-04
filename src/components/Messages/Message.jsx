import React from 'react'
import User from "../../assets/images/side-bar/User.png";
import SampleIMG from "../../assets/images/messages/sampleImage.png";

const Message = () => {
  return (
    <div className='flex items-end gap-3 mx-auto'>
        <div className='content bg-blue-950 p-2 w-96 rounded-xl'>
            <div className='media'>
                <img src={SampleIMG} alt="" />
            </div>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum obcaecati facere molestiae quia</p>
        </div>
        <div className='user w-5 aspect-square rounded-full'>
            <img src={User} alt="pro-pic" />
        </div>
    </div>
  )
}

export default Message