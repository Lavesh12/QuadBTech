import React from 'react';

function SuccessPage({ formData }) {
  return (
    <div className="success-page">
      <h2>Application Submitted Successfully</h2>
      <div className="preview">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Cover Letter:</strong> {formData.coverLetter}</p>
        {/* Add file upload details if implemented */}
      </div>
    </div>
  );
}

export default SuccessPage;
