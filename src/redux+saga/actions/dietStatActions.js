export const SAVE_STAT = 'SAVE_STAT';
export const ADD_DISHES_TO_LIST = 'ADD_DISHES_TO_LIST';


export const saveStat = (data) => ({
    type: SAVE_STAT,
    data
});

export const addDishToList = (data) => ({
    type: ADD_DISHES_TO_LIST,
    data
});
