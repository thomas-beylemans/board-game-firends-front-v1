export const CHANGE_EVENT_VALUE = 'CHANGE_EVENT_VALUE';
export const changeEventValue = (name, newValue) => ({
  type: CHANGE_EVENT_VALUE,
  name,
  newValue,
});

export const CREATE_EVENT = 'CREATE_EVENT';
export const createEvent = (event) => ({
  type: CREATE_EVENT,
  event,
});
