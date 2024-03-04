import React, { useEffect, useState } from 'react'
import { validateCurrentUser } from "../../utils/validateuser";
import {  UIKitSettingsBuilder, CometChatMessageComposer } from "@cometchat/chat-uikit-react";
import { CometChatUsersWithMessages, } from '@cometchat/chat-uikit-react';
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUIKit } from '@cometchat/chat-uikit-react/dist';
//import { CwmDemo } from './Conversation';
const Groupchat = () => {
    const [valUser, setValUser] = useState({});
    const [message, setMsg] = useState('');
    const COMETCHAT_CONSTANTS = {
        APP_ID: "2518033b21cecd02",
        REGION: "in",
        AUTH_KEY: "d6473241f01cb6b03bdc699074ebba51ccd0b00f"
    }
    //create the builder
    const UIKitSettings = new UIKitSettingsBuilder()
        .setAppId(COMETCHAT_CONSTANTS.APP_ID)
        .setRegion(COMETCHAT_CONSTANTS.REGION)
        .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
        .subscribePresenceForFriends()
        .build();

    useEffect(() => {
        //Initialize CometChat UIKit
        currentUserValidation().then((us) => {
            CometChatUIKit.init(UIKitSettings).then(() => {
                console.log("Initialization completed successfully");
                let uid = localStorage.getItem("cc-uid");
                if (uid === null) {
                    //CREATE USER AND LOGIN
                    console.log(us);
                    var user = new CometChat.User(us.uid);
                    user.setName(us.firstname);
                    CometChatUIKit.createUser(user).then(user => {

                        console.log("user created", user);

                        CometChatUIKit.login(user.uid).then(user => {
                            console.log("Login Successful:", { user });
                            localStorage.setItem("cc-uid", user.uid);
                            //mount your app
                        }).catch(console.log);

                    }).catch(console.log);

                } else {
                    const authkey = COMETCHAT_CONSTANTS.AUTH_KEY;
                    console.log('user-found' + uid);
                    CometChatUIKit.getLoggedinUser().then(user => {
                        if (!user) {
                            CometChatUIKit.login(uid).then(user => {
                                console.log("Login Successful:", { user });
                                localStorage.setItem("cc-uid", user.uid);
                                //mount your app
                            }).catch(console.log);
                        } else {
                            console.log('User already logged in');
                            localStorage.setItem("cc-uid", user.uid);
                        }
                    }).catch(console.log);

                }
                launchCometChatWidget(uid)
            }).catch(console.log);
        })

        // return () => {
        //     CometChatUIKit.logout();
        // };
    }, [])

    const launchCometChatWidget = (uid) => {
        console.log(<CometChatMessageComposer/>);
        setMsg(<CometChatMessageComposer uid ={uid}	defaultID= 'superhero1' defaultType= 'user' />)
        
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
        <div className='w-full min-h-screen'>
            {message && 
            <CometChatUsersWithMessages/>
            }


        </div>
    )
}

export default Groupchat