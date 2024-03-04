import React from 'react'
import CatJeep from "../../assets/images/rafflesImages/newJeep.png";
import { GoQuestion } from "react-icons/go";
import NewVeh from "../../assets/images/newVeh.png"

const NoLive = () => {
    return (
        <div className="bg-[#4b4527] hover:bg-[#4b4100]/75 flex-col rounded-3xl 2xl:rounded-[30px] special:rounded-[40px] pr-2 special:pr-4 py-1 space-y-0 shadow-lg xl:w-1/2 md:w-1/2  w-full">
            <div className="flex flex-row justify-between items-center">
                <div className="w-36 special:w-96 2xl:w-36 min-w-32 aspect-square">
                    <img
                        src={NewVeh}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex text-end flex-col z-10 pr-2 items-center space-y-1 special:space-y-2">
                    <p className="text-white font-bold xl:text-[12px] text-xs special:text-4xl 2xl:text-[16px] text-center">
                        No Live Yet Please Check Later
                    </p>
                    <p className="text-[10px] text-white special:text-xl 2xl:text-[10px]">
                        2023-SEP-19 TUESDAY
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 px-5 items-center">
                <div className="col-span-2 flex justify-end gap-2 z-10">
                    <p className="text-[#4FC8E8] font-bold">?</p>
                    <p className="text-white font-bold">?</p>
                    <p className="text-white font-bold">?</p>
                    <p className="text-white font-bold">?</p>
                    <p className="text-white font-bold">?</p>
                </div>
                <div className="col-span-1 justify-end flex">
                    <GoQuestion />
                </div>
            </div>
        </div>
    )
}

export default NoLive