import { CHANGE_VALUE, SAVE_USER, LOGOUT } from "../actions/user";

export const initialState = {
    email: '',
    password: '',
    username: '',
    accessToken: '',
    logged: false,
    city: '',
    lat: '',
    long: '',
    isLoading: false,
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

        case LOGOUT:
            return {
                ...state,
                email: '',
                password: '',
                username: '',
                accessToken: '',
                logged: false,
            };

        default:
            return state;
    }
};

export default reducer;