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

export const SAVE_ERROR = 'SAVE_ERROR';
export const saveError = (error) => ({
  type: SAVE_ERROR,
  error,
});

export const CLEAR_ERROR = 'CLEAR_ERROR';
export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const SAVE_USER = 'SAVE_USER';
export const saveUser = (username, email, id) => ({
  type: SAVE_USER,
  username,
  email,
  id
});

export const SAVE_CITY = 'SAVE_CITY';
export const saveCity = (city) => ({
  type: SAVE_CITY,
  city,
});
