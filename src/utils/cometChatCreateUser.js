const COMETCHAT_CONSTANTS = {
    APP_ID: "2518033b21cecd02",
    REGION: "in",
    AUTH_KEY: "d6473241f01cb6b03bdc699074ebba51ccd0b00f",
    API_KEY: '543c324b1bf499df5bb0307629c77fdb45d0ee9e'
}
const GUID = 'supergroup';



export const createCometChatAccount = async (valUser) => {
    return CometChatWidget.init({
        appID: COMETCHAT_CONSTANTS.APP_ID,
        appRegion: COMETCHAT_CONSTANTS.REGION,
        authKey: COMETCHAT_CONSTANTS.API_KEY
    }).then(() => {
        console.log("CometCHAT init success!!");
        var user = new CometChatWidget.CometChat.User(valUser.uid);
        user.setName(valUser.firstname);
        user.setStatus('online')
        // user.setAvatar(us.image || null);
        CometChatWidget.createOrUpdateUser(user).then(user => {
            console.log("user created", user);
            localStorage.setItem("cc-uid", user.uid);
            CometChatWidget.login({ uid: user.uid }).then(user => {
                console.log("Logged into CometChat :)", { user });
            }).catch(console.log);

        }).catch(console.log)
    })
}

export const cometChatLogin = async (uid) => {
    return CometChatWidget.login({ uid: uid }).then(user => {
        console.log("Logged into CometChat :)", { user });
    }).catch(console.log);
}

export const joinGlobalChatGroup = () => {

    const createCometChatGroup = () => {

        // make GET request to CometChat's REST API
        // to see if group exists
        api.getCometChatGroup(GUID).then((group) => {
            if (group?.data) {
                // group already exists in CometChat
                // so we don't have to create it
                console.log('GRUP EXIST');
                launchCometChat(group.data.guid);
                return;
            }

            // Otherwise, create new CometChat group for this Daily room
            const GROUP_NAME = 'supergroup';
            const GROUP_TYPE = 'public';
            const newGroup = new window.CometChatWidget.CometChat.Group(GUID, GROUP_NAME, GROUP_TYPE);

            // CREATE GROUP WITH ROOM INFO
            CometChatWidget.createOrUpdateGroup(newGroup)
                .then(() => {
                    launchCometChat(GROUP_NAME);
                })
                .catch((e) => {
                    console.error(e);
                });
        });
    };
    createCometChatGroup()
}

const api = {
    getCometChatGroup: async (guid) => {
        const appId = COMETCHAT_CONSTANTS.APP_ID;
        const region = COMETCHAT_CONSTANTS.REGION;
        const key = COMETCHAT_CONSTANTS.API_KEY;

        const response = await fetch(
            `https://${appId}.api-${region}.cometchat.io/v3/groups/${guid}`
            , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    apiKey: key,
                },
            });

        return await response.json();
    }
}


const launchCometChat = (room) => {
    CometChatWidget.init({
        appID: COMETCHAT_CONSTANTS.APP_ID,
        appRegion: COMETCHAT_CONSTANTS.REGION,
        authKey: COMETCHAT_CONSTANTS.API_KEY
    }).then(() => {
        CometChatWidget.launch({
            widgetID: "1ee12db5-eeac-45e1-b196-d1aa9edfceee",
            target: '#groupchat',
            roundedCorners: 'false',
            height: '100vh',
            width: '100%',
            defaultID: GUID, //default UID (user) or GUID (group) to show,
            defaultType: 'group', //user or group
        });
    })

    // setLoaded(true);
};



