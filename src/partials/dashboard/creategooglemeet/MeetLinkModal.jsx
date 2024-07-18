import React from 'react';

function MeetLinkModal({ meetLink, closeModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-xl font-bold mb-4">Google Meet Link</h2>
        <p className="mb-4">
          <a href={meetLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            {meetLink}
          </a>
        </p>
        <button
          onClick={() => navigator.clipboard.writeText(meetLink)}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Copy Link
        </button>
        <button onClick={closeModal} className="px-4 py-2 bg-gray-500 text-white rounded-md">
          Close
        </button>
      </div>
    </div>
  );
}

export default MeetLinkModal;
