import React, { useState } from 'react';
import PaymentTable from './PaymentTable';
import AddPaymentForm from './AddPaymentForm';

function Advancepayment() {
  const [payments, setPayments] = useState([]);

  const addPayment = (payment) => {
    setPayments([...payments, payment]);
  };

  const editPayment = (index, updatedPayment) => {
    const updatedPayments = payments.map((payment, i) => (i === index ? updatedPayment : payment));
    setPayments(updatedPayments);
  };

  const deletePayment = (index) => {
    const updatedPayments = payments.filter((_, i) => i !== index);
    setPayments(updatedPayments);
  };

  return (
    <div className="container mx-auto p-1 lg:p-4">
      <h1 className="text-2xl font-bold mb-4">Client Advance Payments</h1>
      <AddPaymentForm addPayment={addPayment} />
      <PaymentTable payments={payments} editPayment={editPayment} deletePayment={deletePayment} />
    </div>
  );
}

export default Advancepayment;
