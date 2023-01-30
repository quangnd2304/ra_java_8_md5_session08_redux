import { LIST_RANDOM } from "../constants";
const initialState = [1, 3, 5, 7];
const list = (state = initialState, action) => {
    switch (action.type) {
        case LIST_RANDOM:
            state = [...state, parseInt(Math.random() * 10)];
            return state;
        default:
            return state;
    }

}
export default list;