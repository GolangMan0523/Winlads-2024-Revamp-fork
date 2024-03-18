import React, { useEffect, useState } from 'react'
import { validateCurrentUser } from "../../utils/validateuser";
import Loader from '../../components/Loader/Loader';
import { createCometChatAccount } from '../../utils/cometChatCreateUser';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router';
import useScrollToTop from '../../utils/useScrollTop';
// import {  UIKitSettingsBuilder, CometChatMessageComposer } from "@cometchat/chat-uikit-react";
// import { CometChatUsersWithMessages, } from '@cometchat/chat-uikit-react';
// import { CometChat } from "@cometchat/chat-sdk-javascript";
// import { CometChatUIKit } from '@cometchat/chat-uikit-react/dist';
//import { CwmDemo } from './Conversation';
const NewMessage = () => {
    useScrollToTop()
    const [valUser, setValUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const goBack = ()=>{
        navigate(-1)
    }


    useEffect(() => {
        //Initialize CometChat UIKit
        // currentUserValidation().then((us) => {
        //     createCometChatAccount(us).then(() => {
        //         launchCometChatWidget()
        //     })
        // })
        launchCometChatWidget()

        // return () => {
        //     CometChatUIKit.logout();
        // };
    }, [])

    const launchCometChatWidget = () => {
        const isExsit = document.getElementById('cometchat')
        if (!isExsit.innerHTML) {
            CometChatWidget.launch({
                "widgetID": "8e6d2532-4698-416c-b8ed-c868e355466c",
                "target": "#cometchat",
                "roundedCorners": "false",
                "height": "100vh",
                "width": "100%",
                "defaultID": 'superhero1', //default UID (user) or GUID (group) to show,
                "defaultType": 'user' //user or group
            })
            setIsLoading(false)

        }
    };


    const currentUserValidation = async () => {
        const validator = await validateCurrentUser();
        if (validator.validatorBl) {
            console.log("Session OK", validator.user);
            setValUser(validator.user);
            return validator.user
        } else {
            navigate("/login");
        }
    };
    return (
        <>
            {
                isLoading && <div className='w-full h-screen absolute top-0 left-0 z-20'>
                    <Loader />
                </div>
            }

            <div className='absolute top-4 left-0 text-4xl z-20 xl:hidden hover:bg-gray-300' onClick={goBack}>
                <div className='relative z-50 text-cyan-400'>
                    <IoIosArrowBack />
                </div>
            </div>
     
            <div className='w-full min-h-screen z-10' id='cometchat'>


            </div>
        </>
    )
}

export default NewMessage