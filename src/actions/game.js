export const CHANGE_GAME_VALUE = 'CHANGE_GAME_VALUE';
export const changeGameValue = (name, newValue) => ({
  type: CHANGE_GAME_VALUE,
  name,
  newValue,
});
