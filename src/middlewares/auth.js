import jwt_decode from 'jwt-decode';
import axios from "axios";
import { SIGN_UP, LOGIN, saveUser } from "../actions/user";
import { saveError } from "../actions/error";

export const api = axios.create({
  baseURL: 'https://boardgamefriends.herokuapp.com/api/v1',
});


const user = (store) => (next) => async (action) => {
  switch (action.type) {
    case SIGN_UP: {
      const state = store.getState();
      try {
        // send email / password / username / city to the API to register the account
        const response = await api.post('/register', {
          email: state.user.email,
          password: state.user.password,
          username: state.user.username,
          city: state.user.city,
          postcode: state.user.postcode,
          lat: state.user.lat,
          long: state.user.long,
        });
        // get the username and JWT Token from the API and store them in local storage
        const { username, accessToken } = response.data;
        localStorage.setItem(
          'user',
          JSON.stringify({
            username,
            accessToken,
          })
        );
        store.dispatch(saveUser(username));
        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      } catch (err) {
        store.dispatch(saveError(err.response.data.errorMessage));
      }
      break;
    }

    case LOGIN: {
      const state = store.getState();
      try {
        const response = await api.post('/sign-in', {
          email: state.user.email,
          password: state.user.password,
        });
        const { username, accessToken } = response.data;
        localStorage.setItem(
          'user',
          JSON.stringify({
            username,
            accessToken,
          })
        );
        // decode JWT Token sent by the API
        const decodedToken = jwt_decode(accessToken);
        // dispatch the user informations to store them in the state
        store.dispatch(saveUser(username, decodedToken.user.email, decodedToken.user.id));
        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      } catch (err) {
        store.dispatch(saveError(err.response.data.errorMessage));
      }
      break;
    }
    default:
      next(action);
  }
};

export default user;
