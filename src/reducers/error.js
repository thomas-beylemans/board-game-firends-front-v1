import { CLEAR_ERROR, SAVE_ERROR } from "../actions/user";

export const initialState = {
  errorMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ERROR:
      return {
        ...state,
        errorMessage: action.error,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        errorMessage: '',
      };

    default:
      return state;
  }
};

export default reducer;
