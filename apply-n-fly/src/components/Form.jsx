import React, { useState } from 'react';

const Form = ({ onFollowUpSubmit }) => {
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  // Other form fields state variables
  const handleChange = (e) => {
    if(e.target.id === "company-name"){
      console.log("company name")
      setCompanyName(e.target.value);
    } else {
      console.log("job description")
      setJobDescription(e.target.value);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation and API calls can be performed here
    const followUpData = {
      companyName,
      jobDescription,
      // Other form data
    };
    onFollowUpSubmit(followUpData);
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        {/* Input fields for company name, job description, Google Sheets, Gmail account */}
        <label for="company-name">Company Name:</label>
        <input type="text" id="company-name" name="company-name" onChange={handleChange}></input>
        <label for="job-description">Job Description:</label>
        <input type="text" id="job-description" name="job-description" onChange={handleChange}></input>
        <button type="submit">Schedule Follow-up</button>
      </form>
    </div>
  );
};

export default Form;