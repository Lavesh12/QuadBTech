import React from 'react';
import ApplyForm from '../components/ApplyForm';
import SuccessPage from '../components/SuccessPage';

function ApplyPage() {
  const [formData, setFormData] = React.useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="apply-page">
      <h2>Apply for Job</h2>
      {formData ? (
        <SuccessPage formData={formData} />
      ) : (
        <ApplyForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default ApplyPage;
