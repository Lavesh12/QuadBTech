import React, { useState } from 'react';

function JobSearchForm({ onSearch }) {
  const [language, setLanguage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(language);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter programming language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default JobSearchForm;
