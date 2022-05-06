export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (name, newValue) => ({
  type: CHANGE_VALUE,
  name,
  newValue,
});

export const SIGN_UP = 'SIGN_UP';
export const signUp = () => ({
  type: SIGN_UP,
});

export const LOGIN = 'LOGIN';
export const login = () => ({
  type: LOGIN,
});

export const LOGOUT = 'LOGOUT';
export const logOut = () => ({
  type: LOGOUT,
});

export const LOG_ERROR = 'LOG_ERROR';
export const logError = (error) => ({
  type: LOG_ERROR,
  error,
});

export const SAVE_USER = 'SAVE_USER';
export const saveUser = (username, email) => ({
  type: SAVE_USER,
  username,
  email
});

export const CHANGE_VALUE_CITY = 'CHANGE_VALUE_CITY';
export const changeValueCity = (newValue) => ({
  type: CHANGE_VALUE,
  newValue,
});