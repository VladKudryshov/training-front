import React from 'react';
import Message from "./Message";


const ActiveMessage = ({activeDialog}) => (
    <div className="gap active-dialog">
        <ul className="chat-messages gap card">
            {activeDialog.messages.map(message => <Message message={message}/>)}
        </ul>
        <div className="message-card write-message cl3r1 gap">
            <div className="middle"><i className="fas fa-paperclip"></i></div>
            <input type="text" placeholder="Write you text..."/>
            <div className="middle"><i className="far fa-paper-plane"></i></div>
        </div>
    </div>
)
export default ActiveMessage;

