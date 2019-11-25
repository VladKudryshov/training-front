import { combineReducers } from 'redux'
import dietDay from "./dietDay";
import dishes from "./dishes";
import chat from "./chat";
import calendarEvents from "./calendarEvents";

export default combineReducers({
    dietDay,
    dishes,
    chat,
    calendarEvents
})
