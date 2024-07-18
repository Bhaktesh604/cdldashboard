import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import RichTextEditor from './richTextEditor';

const categories = [
  { label: 'Lab Diamond', value: 'Lab Diamond' },
  { label: 'Natural Diamonds', value: 'Natural Diamonds' },
  { label: 'Moissanite', value: 'Moissanite' },
  { label: 'CZ', value: 'CZ' }, 
];
const diamondQuantities = [
  { label: 'VVS EF', value: 'VVS EF' },
  { label: 'VVS FG', value: 'VVS FG' },
  { label: 'VVS GH', value: 'VVS GH' },
  { label: 'VS EF', value: 'VS EF' },
  { label: 'VS FG', value: 'VS FG' },
  { label: 'VS GH', value: 'VS GH' },
  { label: 'SI GH', value: 'SI GH' },
  { label: 'SI HI', value: 'SI HI' },
  { label: 'SI IJ', value: 'SI IJ' },
  { label: 'SI JK', value: 'SI JK' },
  { label: 'DEF', value: 'DEF' },
  { label: 'FG', value: 'FG' },
  { label: 'GH', value: 'GH' },
  { label: 'HI', value: 'HI' },
  { label: 'IJ', value: 'IJ' },
];

const DashboardCard07 = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [tempSelectedOptions, setTempSelectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedDiamondQuantities, setSelectedDiamondQuantities] = useState([]);
  const [tempSelectedDiamondQuantities, setTempSelectedDiamondQuantities] = useState([]);
  const [isDiamondDropdownOpen, setIsDiamondDropdownOpen] = useState(false);

  const handleCheckboxChange = (value) => {
    setTempSelectedOptions((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((option) => option !== value);
      } else {
        return [...prevSelected, value];
      }
    });
    
  };

  const handleDropdownToggle = () => {
    setTempSelectedOptions(selectedOptions); // Reset temp selection to current selected options
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCancel = () => {
    setIsDropdownOpen(false);
  };

  const handleSave = () => {
    setSelectedOptions(tempSelectedOptions);
    setIsDropdownOpen(false);
  };

  const selectedLabels = selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Lab Diamond';

  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="p-3">
        <div className="overflow-x-auto">
          <section className='listing sm:py-1 lg:py-2 sm:px-1 lg:px-6'>
            <div className="container">
              <div className="row">
                <div className="list_main">
                  <div className="w-full flex flex-wrap mb-3">
                    <div className="w-full">
                      <div className="list_input_fil mb-3">
                        <label htmlFor="">Title</label>
                        <br />
                        <input type="text" className='bg-gray-50 w-full border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="list_input_fil">
                        <label htmlFor="">Sub-Title</label>
                        <br />
                        <input type="text" className='bg-gray-50 w-full border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                      </div>
                    </div>
                    <div className="w-full">
                      <RichTextEditor />
                    </div>
                  </div>
                  <div className="w-full mb-3">
                    <h6 className='mb-3'>Media</h6>
                    <div className="flex items-center justify-center w-full">
                      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                  <div className="w-full">
                    <form className='w-full'>
                      <div className="list_input_fil">
                        <label htmlFor="">Stone Type</label>
                        <div
                          id="categories"
                          onClick={handleDropdownToggle}
                          className="relative bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
                        >
                          {selectedLabels}
                        </div>
                        {isDropdownOpen && (
                          <div className="absolute mt-2 w-full max-w-[350px] bg-white border border-gray-300 rounded-lg shadow-lg z-10 dark:bg-gray-700 dark:border-gray-600 p-2.5">
                            {categories.map((category) => (
                              <label key={category.value} className="flex items-center p-2 cursor-pointer dark:text-white">
                                <input
                                  type="checkbox"
                                  value={category.value}
                                  checked={tempSelectedOptions.includes(category.value)}
                                  onChange={() => handleCheckboxChange(category.value)}
                                  className="mr-2"
                                />
                                {category.label}
                              </label>
                            ))}
                            <div className="flex justify-end mt-2">
                              <button
                                type="button"
                                onClick={handleCancel}
                                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 flex items-center justify-center"
                              >
                                <FaTimes />
                              </button>
                              <button
                                type="button"
                                onClick={handleSave}
                                className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center justify-center"
                              >
                                <FaCheck />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard07;
