import React from 'react';

function SuccessPage({ formData }) {
  return (
    <div className="container">
      <h2>Application Submitted Successfully</h2>
      <h3>Preview:</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Cover Letter: {formData.coverLetter}</p>
      {/* Add file upload details if implemented */}
    </div>
  );
}

export default SuccessPage;
