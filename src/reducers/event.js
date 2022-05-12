import { CHANGE_EVENT_VALUE, SAVE_EVENT } from "../actions/event";

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

    default:
      return state;
  }
};

export default reducer;
