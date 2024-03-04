import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";

const FaqItem = ({title, desc}) => {
    const [open, setOpen] = useState(false)

    const handleOpen = ()=>{
        setOpen((prev)=> !prev);
    }
  return (
    <motion.div className=' px-10  '
    initial={{opacity:0, y:-50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}
    viewport={{once:true}}
    >
        <div className='flex items-center justify-between py-5 font-bold'>
            <p>{title}</p>
            <FaPlus className={`cursor-pointer transition-all ${open ? 'rotate-45': ''}`} onClick={handleOpen}/>
        </div>
        <div className={`${open ? 'h-100' : 'h-0'} overflow-hidden transition-[height] duration-700`}>

            {desc}
        </div>
        <div className='border-b-2 border-black w-full my-3'></div>
    </motion.div>
  )
}

export default FaqItem