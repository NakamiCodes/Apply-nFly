import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Feedback from './components/Feedback';
import FollowUpList from './components/FollowUpList';


const App = () => {
  const [followUps, setFollowUps] = useState([]);

  const addFollowUp = (followUp) => {
    setFollowUps([...followUps, followUp]);
    // You can send the followUp data to your backend for processing here
  };

  return (
    <div className="App">
      <Header />
      <Form onFollowUpSubmit={addFollowUp} />
      <Feedback />
      <FollowUpList followUps={followUps} />
    </div>
  );
};

export default App;