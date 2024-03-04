import React, { useState } from 'react'
import crownIcon from '../../assets/images/icons/crown1.svg';
import { useNavigate } from 'react-router-dom';
const MyEntriesButton = () => {
    const [isFoucus , setIsFocus] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = ()=>{
        setIsFocus(true);
    }

    const handleMouseLeave = ()=>{
        setIsFocus(false);
    }

    return (
        <div className='fixed z-10 bottom-4 right-4 p-3 bg-black rounded-full flex items-center text-white cursor-pointer transition-all duration-300' 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
        onFocus={handleMouseEnter}
        onClick={()=>navigate('/myentries')}
        >
            <div className='flex items-center justify-center'>
                <img src={crownIcon} alt="my-entries" className='max-w-8 w-7 md:w-auto object-contain' />
            </div>
           {isFoucus && <h2 className={`px-2 transition-all duration-500 ${isFoucus ? 'scale-100' : 'scale-0'}`}>My Entries</h2>} 
        </div>
    )
}

export default MyEntriesButton