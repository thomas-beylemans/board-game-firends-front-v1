import { SAVE_EVENT_DETAILS } from "../actions/event";

export const initialState = {
  id: '',
  title: '',
  description: '',
  location: [],
  seats: 0,
  start_date: '',
  picture: '',
  eventAdmin : [],
  eventPlayer : [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EVENT_DETAILS:
      return {
        ...state,
        id: action.event.id,
        title: action.event.name,
        description: action.event.description,
        location: action.event.geo,
        seats: action.event.seats,
        start_date: action.event.start_date,
        picture: action.event.picture,
        eventAdmin : action.event.event_admin,
        eventPlayer : action.event.event_player,
      };
    
    default:
      return state;
  }
};

export default reducer;
