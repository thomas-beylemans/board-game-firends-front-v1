import { SUCCESS_MESSAGE } from "../actions/error";
import { CLEAR_ERROR, SAVE_ERROR } from "../actions/user";

export const initialState = {
  errorMessage: '',
  sucessMessage: '',
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

    case SUCCESS_MESSAGE:
      return {
        ...state,
        sucessMessage: action.message,
      };
    
    default:
      return state;
  }
};

export default reducer;
