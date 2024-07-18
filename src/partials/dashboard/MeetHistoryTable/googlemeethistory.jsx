import React, { useState } from 'react';
import MeetHistoryTable from './MeetHistoryTable';
import AddMeetForm from './AddMeetForm';

function GooglemeetHistory() {
  const [meetHistory, setMeetHistory] = useState([]);

  const addMeet = (meet) => {
    setMeetHistory([...meetHistory, meet]);
  };

  const deleteMeet = (index) => {
    const updatedHistory = meetHistory.filter((_, i) => i !== index);
    setMeetHistory(updatedHistory);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Google Meet History</h1>
      {/* <AddMeetForm addMeet={addMeet} /> */}
      <MeetHistoryTable meetHistory={meetHistory} deleteMeet={deleteMeet} />
    </div>
  );
}

export default GooglemeetHistory;
