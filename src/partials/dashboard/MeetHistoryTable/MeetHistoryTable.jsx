import React from 'react';

function MeetHistoryTable({ meetHistory, deleteMeet }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Title</th>
          <th className="py-2">Date</th>
          <th className="py-2">Link</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {meetHistory.map((meet, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{meet.title}</td>
            <td className="border px-4 py-2">{meet.date}</td>
            <td className="border px-4 py-2">
              <a href={meet.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {meet.link}
              </a>
            </td>
            <td className="border px-4 py-2">
              <button onClick={() => deleteMeet(index)} className="px-4 py-2 bg-red-500 text-white rounded-md">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MeetHistoryTable;
