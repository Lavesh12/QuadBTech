import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function JobDetail() {
  const { id } = useParams();
  const [job] = useState(null);
//   const [job, setJob] = useState(null);
  useEffect(() => {
    // Fetch job details using GitHub API based on 'id'
    // Update 'job' state with fetched data
  }, [id]);

  return (
    <div>
      <h2>Job Detail</h2>
      {job && (
        <div>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
        </div>
      )}
    </div>
  );
}

export default JobDetail;
