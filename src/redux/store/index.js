import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteCompanyReducer from "../reducers/favouriteCompanyReducer";
// import mainReducer from "../reducers";
import jobsReducer from "../reducers/jobsReducers";
import jobsForCompanyReducer from "../reducers/jobsForCompanyReducers";

const rootReducer = combineReducers({
  favouriteCompany: favouriteCompanyReducer,
  jobs: jobsReducer,
  jobsForCompany: jobsForCompanyReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
