import React, { useEffect, useState } from 'react'
import { validateCurrentUser } from "../../utils/validateuser";
import Loader from '../../components/Loader/Loader';
// import {  UIKitSettingsBuilder, CometChatMessageComposer } from "@cometchat/chat-uikit-react";
// import { CometChatUsersWithMessages, } from '@cometchat/chat-uikit-react';
// import { CometChat } from "@cometchat/chat-sdk-javascript";
// import { CometChatUIKit } from '@cometchat/chat-uikit-react/dist';
//import { CwmDemo } from './Conversation';
const NewMessage = () => {
    const [valUser, setValUser] = useState({});
    const [message, setMsg] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const COMETCHAT_CONSTANTS = {
        APP_ID: "2518033b21cecd02",
        REGION: "in",
        AUTH_KEY: "d6473241f01cb6b03bdc699074ebba51ccd0b00f",
        API_KEY: '543c324b1bf499df5bb0307629c77fdb45d0ee9e'
    }

    useEffect(() => {
        //Initialize CometChat UIKit

        window.CometChatWidget.init({
            appID: COMETCHAT_CONSTANTS.APP_ID,
            appRegion: COMETCHAT_CONSTANTS.REGION,
            authKey: COMETCHAT_CONSTANTS.API_KEY
        }).then(() => {
            console.log("Initialization completed successfully");
            let uid = 'superhero1'

            const authkey = COMETCHAT_CONSTANTS.AUTH_KEY;
            console.log('user-found' + uid);
            var user = new CometChatWidget.CometChat.User(uid);
            user.setStatus('online')
            // user.setAvatar(us.image || null);
            CometChatWidget.createOrUpdateUser(user).then(user => {

                console.log("user created", user);
                localStorage.setItem("cc-uid", user.uid);
                CometChatWidget.login({uid: uid}).then(user => {
                    console.log("Login Successful:", { user });
                    launchCometChatWidget(uid)
                    //localStorage.setItem("cc-uid", user.uid);
                    //mount your app
                }).catch(console.log);

            }).catch(console.log);

        })

        // return () => {
        //     CometChatUIKit.logout();
        // };
    }, [])

    const launchCometChatWidget = (uid) => {
        const isExsit = document.getElementById('cometchat')
        if (!isExsit.innerHTML) {
            CometChatWidget.launch({
                "widgetID": "8772227a-3617-4cd0-9c4d-1c53efa6470b",
                "target": "#cometchat",
                "roundedCorners": "true",
                "height": "100vh",
                "width": "100%",
            });
            setIsLoading(false)

        }
    };

    return (
        <div className='w-full min-h-screen' id='cometchat'>


        </div>
    )
}

export default NewMessage