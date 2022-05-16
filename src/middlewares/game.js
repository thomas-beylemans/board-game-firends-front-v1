import axios from "axios";
import { ADD_GAME, DELETE_GAME } from "../actions/game";
import { saveError } from "../actions/error";

export const api = axios.create({
  baseURL: 'https://boardgamefriends.herokuapp.com/api/v1',
  // baseURL: 'http://localhost:46655/api/v1',
});


const game = (store) => (next) => async (action) => {
  switch (action.type) {
    case ADD_GAME: {
      try {
        const token = JSON.parse(localStorage.getItem('user'));

        const response = await api.post('/profile/my-games',
          {
            "user": {
              "game": {
                "name": action.game.name,
                "picture": action.game.thumb_url,
              }
            }
          }
          , {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          });
        return (response.data.successMessage);
      }
      catch (err) {
        store.dispatch(saveError(err.response.data.errorMessage));
      }
      break;
    }
    case DELETE_GAME: {
      try {
        const token = JSON.parse(localStorage.getItem('user'));

        const response = await api.delete('/profile/my-games',
          {
            "game": {
                "id": action.game.id,
            }
          }
          , {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          });
          console.log(response.data);
        // return (response.data.successMessage);
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
export default game;
