import React, {Component} from 'react';
import ChatList from "./rooms/ChatList";
import ActiveMessage from "./active-message/ActiveMessage";


const Content = () => (
    <div className="cl2801fr gap">
        <ChatList/>
        <ActiveMessage/>
    </div>
)
export default Content;

