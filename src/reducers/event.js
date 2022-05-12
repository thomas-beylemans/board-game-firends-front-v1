import { CHANGE_EVENT_VALUE, CREATE_EVENT } from "../actions/event";

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
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_EVENT_VALUE:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    
    default:
      return state;
  }
};

export default reducer;
