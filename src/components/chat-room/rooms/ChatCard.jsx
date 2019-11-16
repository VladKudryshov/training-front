import React, {Component} from 'react';
import "../index.css"

const ChatCard = () => (
    <li className="chat-card chat">
        <div className="chat-image">
            <img
                src="https://www.elitesingles.ie/sites/www.elitesingles.ie/files/styles/elite_rectangle_article_arrow_left_frame/public/2b_en_ta_teaser_sp1.png"
                alt=""/>
        </div>
        <div className="chat-user">Row Attribute</div>
        <div className="chat-time">20 mins</div>
        <div className="chat-last-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            velit.
        </div>
        <div className="chat-unread-messages"></div>
    </li>
)
export default ChatCard;

