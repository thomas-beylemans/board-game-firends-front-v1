import { CHANGE_EVENT_VALUE, SAVE_EVENT, SAVE_CITY, SAVE_SUBSCRIBE_EVENT, SAVE_UNSUBSCRIBE_EVENT, SAVE_GAME } from "../actions/event";

export const initialState = {
  name: '',
  city: '',
  postcode: '',
  seats: 0,
  start_date: '',
  picture: '',
  description: '',
  lat: '',
  long: '',
  message: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_EVENT_VALUE:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case SAVE_EVENT:
      return {
        ...state,
        ...initialState,
        message: action.message,
      };

    case SAVE_SUBSCRIBE_EVENT:
      return {
        ...state,
        ...initialState,
        isSubscribed: action.validation
      }
    case SAVE_UNSUBSCRIBE_EVENT:
      return {
        ...state,
        ...initialState,
        isSubscribed: action.validation
      }

    case SAVE_CITY:
      return {
        ...state,
        city: action.city.nom,
        lat: action.city.centre.coordinates[1],
        long: action.city.centre.coordinates[0],
      };

    case SAVE_GAME:
      return {
        ...state,
        game: action.game.name,
        game_picture: action.game.thumb_url,        
      };

    default:
      return state;
  }
};

export default reducer;
