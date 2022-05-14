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
export const saveUser = (username) => ({
  type: SAVE_USER,
  username,
});

export const SAVE_CITY = 'SAVE_CITY';
export const saveCity = (city) => ({
  type: SAVE_CITY,
  city,
});

export const SAVE_BIO = 'SAVE_BIO';
export const saveBio = (bio) => ({
  type: SAVE_BIO,
  bio,
});

export const SAVE_AVATAR = 'SAVE_AVATAR';
export const saveAvatar = (avatar) => ({
  type: SAVE_AVATAR,
  avatar,
});

export const GET_USER_INFOS = 'GET_USER_INFOS';
export const getUserInfos = () => ({
  type: GET_USER_INFOS,
});

export const SAVE_USER_INFOS = 'SAVE_USER_INFOS';
export const saveUserInfos = (user) => ({
  type: SAVE_USER_INFOS,
  user,
});

export const EDIT_USER_INFOS = 'EDIT_USER_INFOS';
export const editUserInfos = (user) => ({
  type: EDIT_USER_INFOS,
  user,
});
