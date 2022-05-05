export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (name, newValue) => ({
  type: CHANGE_VALUE,
  name,
  newValue,
});