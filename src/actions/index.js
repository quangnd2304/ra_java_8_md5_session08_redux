import * as actionTypes from "../constants";
export const act_count_up = (value) => {
    return {
        type: actionTypes.COUNT_UP,
        payload: value
    }
};
export const act_count_down = (value) => {
    return {
        type: actionTypes.COUNT_DOWN,
        payload: value
    }
};
export const act_list_random = () => {
    return {
        type: actionTypes.LIST_RANDOM
    }
}