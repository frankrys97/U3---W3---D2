import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
  content: [],
};

const favouriteCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        content: state.content.filter((company) => company !== action.payload),
      };
    default:
      return state;
  }
};

export default favouriteCompanyReducer;
