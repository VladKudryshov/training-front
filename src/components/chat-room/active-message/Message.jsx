import React from 'react';


const Message = ({message}) => (
    <li className={message.isYour ? "chat-message your-message" : "chat-message their-message"}>
        <div className="message-user">
            <span className="message-time">{message.time}</span>
            <img
                src={message.avatar}
                alt="" className="message-user-image"/>
        </div>
        <div className={message.isYour ? "my-message-card" : "their-message-card"}>{message.message}</div>
    </li>
)
export default Message;
