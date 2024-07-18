import React, { useState } from 'react';

function AddPaymentForm({ addPayment }) {
  const [clientName, setClientName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPayment({ clientName, amount });
    setClientName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Client Name</label>
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Add Payment</button>
    </form>
  );
}

export default AddPaymentForm;
