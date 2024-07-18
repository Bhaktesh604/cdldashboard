import React, { useState } from 'react';
import AddMeetForm from './AddNewMeetForm';
import MeetLinkModal from './MeetLinkModal';

function Creategooglemeet() {
  const [meetLink, setMeetLink] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateMeetLink = (title, time) => {
    // This function would typically involve calling a backend service that integrates with Google Calendar API
    // For demonstration, we'll mock the meet link generation
    const link = `https://meet.google.com/mock-link-${Date.now()}`;
    setMeetLink(link);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Schedule a Google Meet</h1>
      <AddMeetForm generateMeetLink={generateMeetLink} />
      {isModalOpen && (
        <MeetLinkModal meetLink={meetLink} closeModal={closeModal} />
      )}
    </div>
  );
}

export default Creategooglemeet;
