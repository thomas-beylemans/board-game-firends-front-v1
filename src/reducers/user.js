import { CHANGE_VALUE } from "../actions/user";

export const initialState = {
    email: '',
    password: '',
    pseudo: '',
    token: '',
    logged: false,
    city: '',
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_VALUE:
            return {
                ...state,
                [action.name]: action.newValue,
            };
        default:
            return state;
    }
};

export default reducer;