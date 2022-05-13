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

export const SAVE_EVENT = 'SAVE_EVENT';
export const saveEvent = (message) => ({
  type: SAVE_EVENT,
  message,
});

export const SUBSCRIBE_EVENT = 'SUBSCRIBE_EVENT';
export const subscribeEvent = () => ({
  type: SUBSCRIBE_EVENT
})
