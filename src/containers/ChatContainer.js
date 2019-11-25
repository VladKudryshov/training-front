import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import ChatList from "../components/chat-room/rooms/ChatList";
import ActiveMessage from "../components/chat-room/active-message/ActiveMessage";


class ChatContainer extends Component {

    state = {
        visible: false
    };

    render() {

        return (
            <div className="cl2801fr gap">
                <ChatList chatRooms = {this.props.chat.chatRooms}/>
                <ActiveMessage activeDialog = {this.props.chat.activeRoom}/>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    const chat = state.chat;
    return ({
        chat
    });
};


export default connect(mapStateToProps, null)(ChatContainer);


