import { CHANGE_VALUE, SAVE_USER } from "../actions/user";

export const initialState = {
    email: '',
    password: '',
    username: '',
    accessToken: '',
    logged: false,
    city: '',
    lat:'',
    long:'',
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_VALUE:
            return {
                ...state,
                [action.name]: action.newValue,
            };

        case SAVE_USER:
            return {
                ...state,
                email: action.email,
                password: '',
                username: action.username,
                accessToken: action.accessToken,
                logged: true,
            };
        
        default:
            return state;
    }
};

export default reducer;