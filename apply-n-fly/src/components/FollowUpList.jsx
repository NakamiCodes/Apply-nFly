import React from 'react';

const FollowUpList = ({ followUps }) => {
  return (
    <div className="FollowUpList">
      <h2>Scheduled Follow-ups</h2>
      <ul>
        {followUps.map((followUp, index) => (
          <li key={index}>
            {/* Display follow-up details, such as company name, job description, follow-up date */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowUpList;