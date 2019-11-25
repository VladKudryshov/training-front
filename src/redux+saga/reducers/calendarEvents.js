import {SAVE_STAT} from "../actions/dietStatActions";

const calendarEvents = (state = [
        {
            name: 'Владислав Кудряшов',
            date: 'July 3, 2017',
            time: '16:00',
        },
        {
            name: 'Владислав Кудряшов',
            date: 'July 3, 2017',
            time: '16:00',
        },
        {
            name: 'Владислав Кудряшов',
            date: 'July 3, 2017',
            time: '16:00',
        },

    ], action) => {

    switch (action.type) {
        case SAVE_STAT: {
            return {
                ...state,
                stat: action.data
            }
        }

        default:
            return state
    }
};


export default calendarEvents