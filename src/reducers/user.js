import { CHANGE_VALUE, SAVE_USER, LOGOUT, LOG_ERROR } from "../actions/user";

export const initialState = {
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
    accessToken: '',
    logged: false,
    city: '',
    lat: '',
    long: '',
    isLoading: false,
    errorMessage: '',
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
                passwordConfirm: '',
                username: action.username,
                accessToken: action.accessToken,
                logged: true,
            };

        case LOGOUT:
            return {
                ...state,
                email: '',
                password: '',
                passwordConfirm: '',
                username: '',
                accessToken: '',
                logged: false,
            };

        case LOG_ERROR:
            return {
                ...state,
                errorMessage: action.error,
            };

        default:
            return state;
    }
};

export default reducer;