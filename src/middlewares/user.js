import axios from "axios";
import { SIGN_UP, saveUser } from "../actions/user";

export const api = axios.create({
    baseURL: 'http://localhost:46655/api/v1',
});

const user = (store) => (next) => async (action) => {
    switch (action.type) {
        case SIGN_UP: {
            const state = store.getState();
            try {
                const response = await api.post('/register', {
                    email: state.user.email,
                    password: state.user.password,
                    username: state.user.username,
                    city: state.user.city,
                });
                const { username, accessToken } = response.data;
                localStorage.setItem(
                    'user',
                    JSON.stringify({
                        username,
                        accessToken,
                    })
                );
                store.dispatch(saveUser(username, accessToken));
                api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
            } catch (err) {
                console.error(err);
            }
            break;
        }
        default:
            next(action);
        }
    };

export default user;