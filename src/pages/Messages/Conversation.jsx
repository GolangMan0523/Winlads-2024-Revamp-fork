//THIS PAGE NOT USING ANYMORE

import { CometChatConversationsWithMessages } from "@cometchat/chat-uikit-react";
import {
  WithMessagesStyle,
  ConversationsConfiguration,
  SelectionMode,
  ConversationsStyle
} from "@cometchat/uikit-shared";

export function CwmDemo() {
  const cwmStyle = new WithMessagesStyle({
    width: "600px",
    height: "600px"
  });

  const cwfConfig = new ConversationsConfiguration({
    titleAlignment: "center",
    // selectionMode: SelectionMode.multiple,
    conversationsStyle: new ConversationsStyle({
      onlineStatusColor: "#BFFF00"
    }),
    defaultID: 'superhero1', //default UID (user) or GUID (group) to show,
    defaultType: "user",
  });

  return (
    <div className="cwm" style={{ width: "100vw", height: "100vh" }}>
      <h1>CometChatConversationsWithMessages</h1>
      <div>
        <CometChatConversationsWithMessages
          conversationsConfiguration={cwfConfig}
          conversationsWithMessagesStyle={cwmStyle}
        />
      </div>
    </div>
  );
}