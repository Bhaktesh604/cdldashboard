// import React from 'react';

// const people = [
//   { name: 'Lindsay Walton', country: 'India', phone: '99781-41527', email: 'lindsay.walton@example.com', order: 'BH2361', user: 'Member', paymentProgress: 30 },
//   { name: 'Lindsay Walton', country: 'India', phone: '99781-41527', email: 'lindsay.walton@example.com', order: 'BH2361', user: 'Member', paymentProgress: 55 },
//   { name: 'Lindsay Walton', country: 'India', phone: '99781-41527', email: 'lindsay.walton@example.com', order: 'BH2361', user: 'Member', paymentProgress: 75 },
//   { name: 'Lindsay Walton', country: 'India', phone: '99781-41527', email: 'lindsay.walton@example.com', order: 'BH2361', user: 'Member', paymentProgress: 20 },
//   { name: 'Lindsay Walton', country: 'India', phone: '99781-41527', email: 'lindsay.walton@example.com', order: 'BH2361', user: 'Member', paymentProgress: 90 },
//   { name: 'Lindsay Walton', country: 'India', phone: '99781-41527', email: 'lindsay.walton@example.com', order: 'BH2361', user: 'Member', paymentProgress: 45 },
// ];

// const getHealthBarColor = (progress) => {
//   if (progress < 50) return 'bg-red-500';
//   if (progress < 70) return 'bg-yellow-500';
//   return 'bg-green-500';
// };

// const CustomerList = () => {
//   return (
//     <div className="py-4 px-5 sm:px-6 lg:px-8 col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
//       <div className="sm:flex ">
//         <div className="sm:flex-auto">
//           <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
//           <p className="mt-2 mb-0 text-sm text-gray-700">
//             A list of all the users in your account including their name, title, email and role.
//           </p>
//         </div>
//         <div className="sm:ml-16 sm:mt-0 sm:flex-none">
//           <button
//             type="button"
//             className="block rounded-md bg-indigo-600 px-3  text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Add user
//           </button>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
//                     Name
//                   </th>
//                   <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
//                     Country
//                   </th>
//                   <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
//                     Phone No.
//                   </th> 
//                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                     Email
//                   </th>
//                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                     Order
//                   </th>
//                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                     User
//                   </th>
//                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                     Health Bar
//                   </th>
//                   <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
//                     <span className="sr-only">Edit</span>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {people.map((person) => (
//                   <tr key={person.email}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                       {person.name}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.country}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.phone}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.order}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.user}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm">
//                       <div className="w-full bg-gray-200 rounded-full h-4">
//                         <div className={`h-4 rounded-full ${getHealthBarColor(person.paymentProgress)}`} style={{ width: `${person.paymentProgress}%` }}></div>
//                       </div>
//                     </td>
//                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
//                       <a href="#" className="text-indigo-600 hover:text-indigo-900">
//                         Edit<span className="sr-only">, {person.name}</span>
//                       </a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomerList;


// change with edit and delete dropdown
import React, { useState } from 'react';

const initialPeople = [
  { id: 1, name: 'Lindsay Walton', country: 'India', phone: '99781-41527', email: 'lindsay.walton@example.com', order: 'BH2361', user: 'Member', paymentProgress: 30 },
  { id: 2, name: 'Lindsay Walton', country: 'India', phone: '99781-41527', email: 'lindsay.walton@example.com', order: 'BH2361', user: 'Member', paymentProgress: 55 },
  { id: 3, name: 'Lindsay Walton', country: 'India', phone: '99781-41527', email: 'lindsay.walton@example.com', order: 'BH2361', user: 'Member', paymentProgress: 75 },
  { id: 4, name: 'Lindsay Walton', country: 'India', phone: '99781-41527', email: 'lindsay.walton@example.com', order: 'BH2361', user: 'Member', paymentProgress: 20 },
  { id: 5, name: 'Lindsay Walton', country: 'India', phone: '99781-41527', email: 'lindsay.walton@example.com', order: 'BH2361', user: 'Member', paymentProgress: 90 },
  { id: 6, name: 'Lindsay Walton', country: 'India', phone: '99781-41527', email: 'lindsay.walton@example.com', order: 'BH2361', user: 'Member', paymentProgress: 45 },
];

const getHealthBarColor = (progress) => {
  if (progress < 50) return 'bg-red-500';
  if (progress < 70) return 'bg-yellow-500';
  return 'bg-green-500';
};

const CustomerList = () => {
  const [people, setPeople] = useState(initialPeople);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleDropdownToggle = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  const handleDelete = (userId) => {
    setPeople(people.filter((person) => person.id !== userId));
  };

  const handleEdit = (person) => {
    setCurrentUser(person);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  const handleSave = () => {
    setPeople(
      people.map((person) =>
        person.id === currentUser.id ? currentUser : person
      )
    );
    handleCloseModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  return (
    <div className="py-4 px-5 sm:px-6 lg:px-8 col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="sm:flex ">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
          <p className="mt-2 mb-0 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Country
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Phone No.
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Order
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    User
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Health Bar
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Settings</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {people.map((person, index) => (
                  <tr key={person.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.country}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.phone}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.order}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.user}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className={`h-4 rounded-full ${getHealthBarColor(person.paymentProgress)}`} style={{ width: `${person.paymentProgress}%` }}></div>
                      </div>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <button onClick={() => handleDropdownToggle(index)} className="text-gray-500 hover:text-gray-700">
                        &#x22EE;
                      </button>
                      {dropdownIndex === index && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                          <button
                            onClick={() => handleEdit(person)}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(person.id)}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-10">
            <h2 className="text-lg font-semibold mb-4">Edit User</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={currentUser?.name || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Country</label>
                <input
                  type="text"
                  name="country"
                  value={currentUser?.country || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={currentUser?.phone || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={currentUser?.email || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Order</label>
                <input
                  type="text"
                  name="name"
                  value={currentUser?.name || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">User</label>
                <input
                  type="text"
                  name="name"
                  value={currentUser?.name || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              
              <div className="flex justify-end">
                <button type="button" onClick={handleCloseModal} className="mr-2 px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerList;
