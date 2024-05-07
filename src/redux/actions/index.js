export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_JOBS = "SET_JOBS";
export const JOBS_FOR_COMPANY = "JOBS_FOR_COMPANY";
export const SET_IS_LOADING_0FF = "SET_IS_LOADING_0FF";
export const SET_IS_LOADING_ON = "SET_IS_LOADING_ON";
export const SET_ERROR_ON = "SET_ERROR_ON";
export const SET_ERROR_OFF = "SET_ERROR_OFF";
export const SET_CLICK_ON_FORM_TRUE = "SET_CLICK_ON_FORM_TRUE";
export const SET_CLICK_ON_FORM_FALSE = "SET_CLICK_ON_FORM_FALSE";

export const addToFavourite = (companyName) => ({
  type: ADD_TO_FAVOURITE,
  payload: companyName,
});

export const removeFromFavourite = (companyName) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: companyName,
});

export const setJobs = (jobs) => ({
  type: SET_JOBS,
  payload: jobs,
});

export const setLoadingOn = () => ({
  type: SET_IS_LOADING_ON,
});

export const setLoadingOff = () => ({
  type: SET_IS_LOADING_0FF,
});

export const setErrorOn = (error) => ({
  type: SET_ERROR_ON,
  payload: error,
});

export const setErrorOff = () => ({
  type: SET_ERROR_OFF,
});

export const setClickOnFormTrue = () => ({
  type: SET_CLICK_ON_FORM_TRUE,
});

export const setClickOnFormFalse = () => ({
  type: SET_CLICK_ON_FORM_FALSE,
});

export const setJobsForCompany = (jobs) => ({
  type: JOBS_FOR_COMPANY,
  payload: jobs,
});

export const handleSubmitAction = (e, baseEndpoint, query) => {
  e.preventDefault();
  return async (dispatch, getState) => {
    try {
      dispatch(setClickOnFormTrue());

      dispatch(setLoadingOn());
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        // dispatch({ type: "SET_JOBS", payload: data });
        dispatch(setJobs(data));
        // dispatch({type: SET_JOBS, payload: data})
        dispatch(setErrorOff());
      } else {
        throw new Error("Error fetching results");
      }
    } catch (error) {
      console.log(error);
      dispatch(setErrorOn(error.message));
    } finally {
      dispatch(setLoadingOff());
    }
  };
};
export const getJobsFromCompany = (baseEndpoint, params) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        // setJobs(data);

        // dispatch({ type: "JOBS_FOR_COMPANY", payload: data });

        dispatch(setJobsForCompany(data));
        dispatch(setErrorOff());
      } else {
        throw new Error("Error fetching results");
      }
    } catch (error) {
      console.log(error);
      dispatch(setErrorOn(error.message));
    } finally {
      dispatch(setLoadingOff());
    }
  };
};
