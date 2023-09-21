import * as actionTypes from '../actions/actionTypes';

const initialState = {
  jobs: [],
  selectedJob: null,
  applicantInfo: null,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_JOBS:
      return {
        ...state,
        jobs: action.jobs,
      };
    case actionTypes.SET_SELECTED_JOB:
      return {
        ...state,
        selectedJob: action.job,
      };
    case actionTypes.SET_APPLICANT_INFO:
      return {
        ...state,
        applicantInfo: action.applicantInfo,
      };
    // Add other cases
    default:
      return state;
  }
};

export default jobReducer;
