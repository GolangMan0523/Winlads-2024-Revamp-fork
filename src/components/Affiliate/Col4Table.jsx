import React from 'react'

const Col4Table = ({ data =[], header = [] }) => {
    return (
        <table className='bg-[#F2F8FF] p-2 w-full'>
            <thead>
                <tr className='p-5 text-center'>
                    {header.map((th,index) => (
                        <th key={index}>{th}</th>
                    ))}
                </tr>
            </thead>
            <tbody className='text-center'>
                {
                    data.map((tr,index)=>(
                     <tr key={index} className='border-b border-black'><td className='p-5'> {tr.id}</td><td className='p-5'>{tr.name}</td><td className='p-5'>{tr.mobile}</td><td className='p-5'>{tr.email}</td></tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Col4Table