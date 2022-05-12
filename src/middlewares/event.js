import axios from "axios";
import { CREATE_EVENT } from "../actions/event";
import { saveError } from "../actions/error";

export const api = axios.create({
  baseURL: 'http://localhost:46655/api/v1',
});


const event = (store) => (next) => async (action) => {
  switch (action.type) {
    case CREATE_EVENT: {
      const state = store.getState();
      try {
        const token = JSON.parse(localStorage.getItem('user'));
        console.log(token.accessToken);

        const response = await axios.post('http://localhost:46655/api/v1/events',
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
                // lat: state.event.lat,
                "lat": 32.12345,
                "long": -123.12345,
                // long: state.event.long
              }
          }
        },{
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        });
        console.log(response.data);
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
