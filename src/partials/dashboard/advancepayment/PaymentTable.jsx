import React, { useState } from 'react';

function PaymentTable({ payments, editPayment, deletePayment }) {
  const [isEditing, setIsEditing] = useState(null);
  const [editClientName, setEditClientName] = useState('');
  const [editAmount, setEditAmount] = useState('');

  const handleEdit = (index) => {
    setIsEditing(index);
    setEditClientName(payments[index].clientName);
    setEditAmount(payments[index].amount);
  };

  const handleSave = (index) => {
    editPayment(index, { clientName: editClientName, amount: editAmount });
    setIsEditing(null);
  };

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Client Name</th>
          <th className="py-2">Amount</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((payment, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">
              {isEditing === index ? (
                <input
                  type="text"
                  value={editClientName}
                  onChange={(e) => setEditClientName(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md"
                />
              ) : (
                payment.clientName
              )}
            </td>
            <td className="border px-4 py-2">
              {isEditing === index ? (
                <input
                  type="number"
                  value={editAmount}
                  onChange={(e) => setEditAmount(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md"
                />
              ) : (
                payment.amount
              )}
            </td>
            <td className="border px-4 py-2">
              {isEditing === index ? (
                <button onClick={() => handleSave(index)} className="px-4 py-2 bg-green-500 text-white rounded-md">Save</button>
              ) : (
                <button onClick={() => handleEdit(index)} className="px-4 py-2 bg-yellow-500 text-white rounded-md">Edit</button>
              )}
              <button onClick={() => deletePayment(index)} className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PaymentTable;
