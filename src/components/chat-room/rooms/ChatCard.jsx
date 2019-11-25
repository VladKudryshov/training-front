import React, {Component} from 'react';
import "../index.css"

const ChatCard = ({room}) => (
    <li className="chat-card chat">
        <div className="chat-image">
            <img
                src={room.avatar}
                alt=""/>
        </div>
        <div className="chat-user">{room.name}</div>
        <div className="chat-time">{room.timeAgo}</div>
        <div className="chat-last-message">{room.lastMessage}</div>
        {room.isRead && <div className="chat-unread-messages"/>}

    </li>
)
export default ChatCard;

