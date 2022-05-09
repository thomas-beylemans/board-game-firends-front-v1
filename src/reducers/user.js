import { CHANGE_VALUE, SAVE_USER, LOGOUT, SAVE_CITY } from "../actions/user";

export const initialState = {
    id: '',
    email: '',
    password: '',
    username: '',
    logged: false,
    city: '',
    bio:'',
    avatar:'',
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
        id: action.id,
        email: action.email,
        password: '',
        passwordConfirm: '',
        username: action.username,
        accessToken: action.accessToken,
        logged: true,
      };

    case SAVE_CITY:
      return {
        ...state,
        city: action.city.nom,
        lat: action.city.centre.coordinates[1],
        long: action.city.centre.coordinates[0],
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

    default:
      return state;
  }
};

export default reducer;
