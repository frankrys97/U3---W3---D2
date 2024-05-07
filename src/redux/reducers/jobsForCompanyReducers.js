import { JOBS_FOR_COMPANY, SET_IS_LOADING_0FF, SET_IS_LOADING_ON, SET_ERROR_ON, SET_ERROR_OFF } from "../actions";

const initialState = {
    content: [],
}

const jobsForCompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOBS_FOR_COMPANY:
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
        default:
            return state;
    }
}

export default jobsForCompanyReducer