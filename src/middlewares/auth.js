import axios from "axios";
import { SIGN_UP, LOGIN, saveUser, GET_USER_INFOS, saveUserInfos } from "../actions/user";
import { saveError } from "../actions/error";

export const api = axios.create({
  baseURL: 'https://boardgamefriends.herokuapp.com/api/v1',
  // baseURL: 'http://localhost:46655/api/v1',
});

const user = (store) => (next) => async (action) => {
  switch (action.type) {
    case SIGN_UP: {
      const state = store.getState();
      try {
        // send email / password / username / city to the API to register the account
        const response = await api.post('/register', {
          "user": {
            "email": state.user.email,
            "password": state.user.password,
            "username": state.user.username,
            "geo": {
              "city": state.user.city,
              "postcode": state.user.postcode,
              "lat": state.user.lat,
              "long": state.user.long
            }
          }
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
        store.dispatch(saveUser(username));
        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      } catch (err) {
        store.dispatch(saveError(err.response.data.errorMessage));
      }
      break;
    }

    case GET_USER_INFOS: {
      try {
        const token = JSON.parse(localStorage.getItem('user'));
        let result = await api.get('/dashboard', {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        });
        result = result.data;
        const id = result.user.id;
        const email = result.user.email;
        const username = result.user.username;
        const avatar = result.user.avatar;
        const bio = result.user.bio;
        const city = result.user.geo.city;
        const postcode = result.user.geo.postcode;
        const lat = result.user.geo.lat;
        const long = result.user.geo.long;

        const user = {
          id,
          email,
          username,
          avatar,
          bio,
          city,
          postcode,
          lat,
          long,
        }
        localStorage.setItem(
          'userInfos',
          JSON.stringify({
            user,
          })
        );
        store.dispatch(saveUserInfos(user));
      }
      catch (err) {
        store.dispatch(saveError(err.response.data.errorMessage));
      }
      break;
    }

    default:
      next(action);
  }
};

export default user;
