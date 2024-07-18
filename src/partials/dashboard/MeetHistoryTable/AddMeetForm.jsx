import React, { useState } from 'react';

function AddMeetForm({ addMeet }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMeet({ title, date, link });
    setTitle('');
    setDate('');
    setLink('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Google Meet Link</label>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Add Meet</button>
    </form>
  );
}

export default AddMeetForm;
