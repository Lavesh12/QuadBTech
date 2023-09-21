import React, { useState } from 'react';

function ApplyForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Cover Letter"
        value={coverLetter}
        onChange={(e) => setCoverLetter(e.target.value)}
        required
      />
      <button type="submit">Apply</button>
    </form>
  );
}

export default ApplyForm;
