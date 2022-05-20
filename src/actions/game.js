export const CHANGE_GAME_VALUE = 'CHANGE_GAME_VALUE';
export const changeGameValue = (name, newValue) => ({
  type: CHANGE_GAME_VALUE,
  name,
  newValue,
});

export const ADD_GAME = 'ADD_GAME';
export const addGame = (game) => ({
  type: ADD_GAME,
  game,
});

export const DELETE_GAME = 'DELETE_GAME';
export const deleteGame = (gameId) => ({
  type: DELETE_GAME,
  gameId,
});
