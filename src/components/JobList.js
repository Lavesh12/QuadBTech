import React, { useState, useEffect } from 'react';

function JobList({ language }) {
  const [jobs] = useState([]);
//   const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs using GitHub API based on selected language
    // Update 'jobs' state with fetched data
  }, [language]);

  return (
    <div>
      <h2>Job List</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            {job.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
