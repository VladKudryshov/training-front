import React from 'react';
import ChatCard from "./ChatCard";
import "../index.css"


const ChatList = ({chatRooms}) => (
    <div>
        <div className="search card-wp">
            <input name="q" type="text" placeholder="Поиск..." value="" autoComplete="off" maxLength="240"
                   className="s-input s-input__search js-search-field " aria-label="Поиск"/>
            <svg aria-hidden="true" className="svg-icon s-input-icon s-input-icon__search iconSearch" width="18"
                 height="18"
                 viewBox="0 0 18 18">
                <path
                    d="M18 16.5l-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0z"/>
            </svg>
        </div>
        <ul className="chat-room">

            {chatRooms.map(room => <ChatCard room={room}/>)}

        </ul>
    </div>
)
export default ChatList;

