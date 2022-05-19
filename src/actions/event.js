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

export const SAVE_CITY = 'SAVE_CITY';
export const saveCity = (city) => ({
  type: SAVE_CITY,
  city,
});
export const SUBSCRIBE_EVENT = 'SUBSCRIBE_EVENT';
export const subscribeEvent = (id) => ({
  type: SUBSCRIBE_EVENT,
  id,
});

export const SAVE_SUBSCRIBE_EVENT = 'SAVE_SUBSCRIBE_EVENT';
export const saveSubscribeEvent = (validation) => ({
  type: SAVE_SUBSCRIBE_EVENT,
  validation,
});

export const UNSUBSCRIBE_EVENT = 'UNSUBSCRIBE_EVENT';
export const unsubscribeEvent = (id) => ({
  type: UNSUBSCRIBE_EVENT,
  id,
});

export const SAVE_UNSUBSCRIBE_EVENT = 'SAVE_UNSUBSCRIBE_EVENT';
export const saveUnsubscribeEvent = (validation) => ({
  type: SAVE_UNSUBSCRIBE_EVENT,
  validation,
});

export const SAVE_EVENT_DETAILS = 'SAVE_EVENT_DETAILS';
export const saveEventDetails = (event) => ({
  type: SAVE_EVENT_DETAILS,
  event,
});
