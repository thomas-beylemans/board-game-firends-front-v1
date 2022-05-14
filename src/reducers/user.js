import { CHANGE_VALUE, SAVE_USER, LOGOUT, SAVE_CITY, SAVE_USER_INFOS, SAVE_BIO, SAVE_AVATAR } from "../actions/user";

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
        password: '',
        passwordConfirm: '',
        username: action.username,
        logged: true,
      };

    case SAVE_CITY:
      return {
        ...state,
        city: action.city.nom,
        lat: action.city.centre.coordinates[1],
        long: action.city.centre.coordinates[0],
      };

      case SAVE_BIO:
      return {
        ...state,        
        bio: action.bio,
      };

      case SAVE_AVATAR:
      return {
        ...state,        
        avatar: action.avatar,
      };

    case LOGOUT:
      return {
        ...state,
        email: '',
        password: '',
        passwordConfirm: '',
        username: '',
        logged: false,
      };

    case SAVE_USER_INFOS:
      return {
        ...state,
        id: action.user.id,
        email: action.user.email,
        username: action.user.username,
        avatar: action.user.avatar,
        bio: action.user.bio,
        city: action.user.city,
        postcode: action.user.postcode,
        lat: action.user.lat,
        long: action.user.long,
      };

    default:
      return state;
  }
};

export default reducer;
