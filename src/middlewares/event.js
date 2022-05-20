import axios from "axios";
import { CREATE_EVENT, saveEvent, SUBSCRIBE_EVENT, saveSubscribeEvent, UNSUBSCRIBE_EVENT, saveUnsubscribeEvent } from "../actions/event";
import { saveError } from "../actions/error";

export const api = axios.create({
  baseURL: 'https://boardgamefriends.herokuapp.com/api/v1',
  // baseURL: 'http://localhost:46655/api/v1',
});


const event = (store) => (next) => async (action) => {
  switch (action.type) {
    case CREATE_EVENT: {
      const state = store.getState();
      try {
        const token = JSON.parse(localStorage.getItem('user'));

        const response = await api.post('/events',
          {
            "event": {
              "name": state.event.name,              
              "picture": state.event.game_picture,
              "seats": state.event.seats,
              "start_date": state.event.start_date,
              "description": state.event.description,
              "geo": {
                "city": state.event.city,
                "postcode": state.event.postcode,
                "lat": state.event.lat,
                "long": state.event.long
              }
            }
          }, {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        });
        store.dispatch(saveEvent(response.data.event.successMessage, response.data.event.result.id));
      }
      catch (err) {
        store.dispatch(saveError(err.response.data.event.errorMessage));
      }
      break;
    }


    case SUBSCRIBE_EVENT:
      {

        try {
          const token = JSON.parse(localStorage.getItem('user'));
          const response = await api.post(`/events/${action.id}/subscribe`,
            {
              "event": {
                "id": action.id,
              }
            }, {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          });          
          store.dispatch(saveSubscribeEvent(response.data.isSubscribed));
        }
        catch (err) {
          store.dispatch(saveError(err.response.data.event.errorMessage));
        }
        break;
      }

    case UNSUBSCRIBE_EVENT:
      {
        try {
          const token = JSON.parse(localStorage.getItem('user'));

          const response = await api.delete(`/events/${action.id}/subscribe`, {
            data: {
              "event": {
                "id": action.id,
              }
            },
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            }
          });          
          store.dispatch(saveUnsubscribeEvent(response.data.isSubscribed));
        }
        catch (err) {
          store.dispatch(saveError(err.response.data.event.errorMessage));
        }
        break;
      }
    default:
      return next(action);
  }
}
export default event;
