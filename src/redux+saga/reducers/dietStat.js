import {SAVE_STAT} from "../actions/dietStatActions";

const dietStat = (state = {
    stat: {
        finish: {
            squirrels: 232,
            fats: 60,
            carbohydrates: 300,
            calories: 3000,
            water: 4000
        },
        current: {
            squirrels: 242,
            fats: 10,
            carbohydrates: 300,
            calories: 3100,
            water: 3000
        }
    }
}, action) => {

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


export default dietStat