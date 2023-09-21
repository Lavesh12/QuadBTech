import React from 'react';
import JobSearchForm from '../components/JobSearchForm';
import JobList from '../components/JobList';

function JobSearchPage() {
  return (
    <div className="job-search-page">
      <h2>Find Jobs</h2>
      <JobSearchForm />
      <JobList />
    </div>
  );
}

export default JobSearchPage;
