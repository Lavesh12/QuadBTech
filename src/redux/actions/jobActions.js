import * as actionTypes from './actionTypes';

export const setJobs = (jobs) => {
  return {
    type: actionTypes.SET_JOBS,
    jobs,
  };
};

export const setSelectedJob = (job) => {
  return {
    type: actionTypes.SET_SELECTED_JOB,
    job,
  };
};

export const setApplicantInfo = (applicantInfo) => {
  return {
    type: actionTypes.SET_APPLICANT_INFO,
    applicantInfo,
  };
};

// Add other action creators related to jobs
