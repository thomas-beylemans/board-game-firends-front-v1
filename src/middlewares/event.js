import axios from "axios";
import { CREATE_EVENT, saveEvent, SUBSCRIBE_EVENT,saveSubscribeEvent, UNSUBSCRIBE_EVENT, saveUnsubscribeEvent} from "../actions/event";
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
              // picture: state.event.picture,
              "picture": "google.fr",
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
        store.dispatch(saveEvent(response.data.events.successMessage));
      }
      catch (err) {
        store.dispatch(saveError(err.response.data.events.errorMessage));
      }
      break;
    }


    case SUBSCRIBE_EVENT:
      {
        
        console.log(action.id);
      try {
        const token = JSON.parse(localStorage.getItem('user'));
        console.log("je passe dans le SubscribeEvent")
        const response = await api.post(`/events/${action.id}/subscribe`,
        {
            "event": {
              "id": action.id,
          }
        },{
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        });
        console.log(response.data, "RESPONSE DATA")
        store.dispatch(saveSubscribeEvent(response.data.events.validation));
        
      }
      catch (err) {
        store.dispatch(saveError(err.response.data.events.errorMessage));
        console.log(err.response.data.errorMessage, "ERROR")
      }
      break;        
      }

    case UNSUBSCRIBE_EVENT:
      {
        
        console.log(action.id);
      try {
        const token = JSON.parse(localStorage.getItem('user'));
        console.log("je passe dans le unsubcribeEvent")
        const response = await api.delete(`/events/${action.id}/subscribe`,
        {
            "event": {
              "id": action.id,
          }
        },{
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        });
        console.log(response.data, "RESPONSE DATA")
        store.dispatch(saveUnsubscribeEvent(response.data.events.validation));
        
      }
      catch (err) {
        store.dispatch(saveError(err.response.data.events.errorMessage));
        console.log(err.response.data.errorMessage, "ERROR")
      }
      break;        
      }




    default:
      return next(action);
  }
}
export default event;
