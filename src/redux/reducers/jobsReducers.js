import {
  SET_JOBS,
  SET_IS_LOADING_0FF,
  SET_IS_LOADING_ON,
  SET_ERROR_ON,
  SET_ERROR_OFF,
  SET_CLICK_ON_FORM_TRUE,
  SET_CLICK_ON_FORM_FALSE
} from "../actions";

const initialState = {
  content: [],
  isLoading: false,
  hasError: false,
  errorMessage: "",
  clickOnForm: false,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        content: action.payload,
      };
    case SET_IS_LOADING_0FF:
      return {
        ...state,
        isLoading: false,
      };
    case SET_IS_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case SET_ERROR_ON:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };

    case SET_ERROR_OFF:
      return {
        ...state,
        hasError: false,
        errorMessage: "",
      };
      case SET_CLICK_ON_FORM_TRUE:
        return {
          ...state,
          clickOnForm: true,
        }
        case SET_CLICK_ON_FORM_FALSE:
          return {
            ...state,
            clickOnForm: false,
          }

    default:
      return state;
  }
};

export default jobsReducer;
