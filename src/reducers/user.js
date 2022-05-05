import { CHANGE_VALUE, SAVE_USER } from "../actions/user";

export const initialState = {
    email: '',
    password: '',
    username: '',
    logged: false,
    city: '',
    lat:'43.1363587',
    long:'5.89842',
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
                email: '',
                password: '',
                username: action.username,
                logged: true,
            };
        
        default:
            return state;
    }
};

export default reducer;