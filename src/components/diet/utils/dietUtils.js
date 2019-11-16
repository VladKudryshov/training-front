export const getPercentDone = (value, currentValue) => {
    let number = Number(currentValue) * 100 / Number(value);
    return Number(currentValue) === 0 ? 0 : number > 100 ? 100 - (number - 100) : number;
};


export const getPercentMore = (value, currentValue) => {
    return Number(currentValue) > Number(value) ?  100 - getPercentDone(value, currentValue) : 0;
};