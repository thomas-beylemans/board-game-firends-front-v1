import axios from "axios";
import { CREATE_EVENT } from "../actions/event";
import { saveError } from "../actions/error";

export const api = axios.create({
  baseURL: 'https://boardgamefriends.herokuapp.com/api/v1',
});
const accessToken = JSON.parse(localStorage.getItem('user'));
api.defaults.headers.common.Authorization = `Bearer ${accessToken.accessToken}`;

const event = (store) => (next) => async (action) => {
  switch (action.type) {
    case CREATE_EVENT: {
      const state = store.getState();
      console.log(accessToken.accessToken);
      try {
        const response = await api.post('/events', {
          data: {
          event: {
            name: state.event.name,
            picture: state.event.picture,
            seats: state.event.seats,
            start_date: state.event.start_date,
            description: state.event.description,
            geo: {
              city: state.event.city,
              postcode: state.event.postcode,
              lat: state.event.lat,
              long: state.event.long
              }
            }
          }
        });
        return response.data;
      }
      catch (err) {
        store.dispatch(saveError(err.response.data.errorMessage));
      }
      break;
    }
    default:
      return next(action);
  }
}
export default event;
