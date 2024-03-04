import React, { useEffect } from 'react'
import { joinGlobalChatGroup } from '../../utils/cometChatCreateUser'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router';
const GroupChat = () => {
    const navigate = useNavigate();
    useEffect(() => {
        joinGlobalChatGroup()
    }, [])
    const goBack = ()=>{
        navigate(-1)
    }
    return (
        <div className=' w-full'>
            <div className='absolute top-4 left-0 text-4xl z-20 xl:hidden hover:bg-gray-300' onClick={goBack}>
                <div className='relative z-50 text-cyan-400'>
                    <IoIosArrowBack />
                </div>
            </div>
            <div id='groupchat' className='w-full z-0 relative'>

            </div>
        </div>
    )
}

export default GroupChat