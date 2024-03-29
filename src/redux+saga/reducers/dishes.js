import {ADD_DISHES_TO_LIST, SAVE_STAT} from "../actions/dietStatActions";

const dishes = (state = {
    catalog: [
        {
            info: {
                name: 'asd',
                isDish: true,
                isFavorite: true,
            },
            stat: {
                finish: {
                    squirrels: 100,
                    fats: 100,
                    carbohydrates: 100,
                },
                current: {
                    squirrels: 12,
                    fats: 13,
                    carbohydrates: 13,
                    calories: 3100,
                }
            }
        },
        {
            info: {
                name: 'FAFA',
                isDish: false,
                isFavorite: false,
            },
            stat: {
                finish: {
                    squirrels: 100,
                    fats: 100,
                    carbohydrates: 100,
                },
                current: {
                    squirrels: 12,
                    fats: 13,
                    carbohydrates: 13,
                    calories: 3100,
                }
            }
        }
    ],
    current: [
        {
            info: {
                name: 'НЯМА',
                isDish: false,
                isFavorite: true,
            },
            stat: {
                finish: {
                    squirrels: 100,
                    fats: 100,
                    carbohydrates: 100,
                },
                current: {
                    squirrels: 12,
                    fats: 13,
                    carbohydrates: 13,
                    calories: 3100,
                }
            }
        },
        {
            info: {
                name: 'НЯМКА',
                isDish: false,
                isFavorite: false,
            },
            stat: {
                finish: {
                    squirrels: 100,
                    fats: 100,
                    carbohydrates: 100,
                },
                current: {
                    squirrels: 12,
                    fats: 13,
                    carbohydrates: 13,
                    calories: 3100,
                }
            }
        }
    ]
}, action) => {

    switch (action.type) {
        case SAVE_STAT: {
            return {
                ...state,
                dishes: action.data
            }
        }
        case ADD_DISHES_TO_LIST: {
            return {
                ...state,
                current: [...state.current, action.data]
            }
        }

        default:
            return state
    }
};


export default dishes