import { CHANGE_EVENT_VALUE, SAVE_EVENT, SAVE_SUBSCRIBE_EVENT} from "../actions/event";

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
          message: action.validation
        }

    default:
      return state;
  }
};

export default reducer;
