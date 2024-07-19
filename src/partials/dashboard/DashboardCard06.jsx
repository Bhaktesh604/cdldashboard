import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';
import Select from 'react-select';
import { tailwindConfig } from '../../utils/Utils';

const statusOptions = [
  { value: 'active', label: 'Active' },
  { value: 'draft', label: 'Draft' }
];

const sizeOptions = [
  { value: 'rings', label: 'Ring' },
  { value: 'necklace', label: 'Necklace' },
  { value: 'bracelet', label: 'Bracelet' },
];

const shapeOptions = [
  { value: 'round', label: 'Round' },
  { value: 'square', label: 'Square' },
  { value: 'oval', label: 'Oval' },
  { value: 'rectangle', label: 'Rectangle' },
];

const metalOptions = [
  { value: '18k', label: '18K' },
  { value: '14k', label: '14K' },
  { value: '10k', label: '10K' }, 
];
const coolectionOptions = [
  { value: '18k', label: '18K' },
  { value: '14k', label: '14K' },
  { value: '10k', label: '10K' }, 
];


function DashboardCard06() {
  const chartData = {
    labels: ['United States', 'Italy', 'Other'],
    datasets: [
      {
        label: 'Top Countries',
        data: [35, 30, 35],
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.indigo[800],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.indigo[900],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="overflow-x-auto">
        <section className='listing px-6 py-6'>
          <div className="w-full">
            <form className='w-full'>
              <div className="row flex">
                <div className='mb-3'>
                  <label htmlFor="product-status" style={{ display: 'block', marginBottom: '10px' }}>Product Status</label>
                  <Select
                    id="product-status"
                    name="status"
                    options={statusOptions}
                    className="basic-single-select"
                    classNamePrefix="select"
                  />
                </div> 

                <div className='mb-3'>
                  <label htmlFor="shapes">Size</label>
                  <Select
                    id="shapes"
                    defaultValue={[sizeOptions[2], sizeOptions[3]]}
                    isMulti
                    name="shapes"
                    options={sizeOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor="shapes">Shape</label>
                  <Select
                    id="shapes"
                    defaultValue={[shapeOptions[2], shapeOptions[3]]}
                    isMulti
                    name="shapes"
                    options={shapeOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor="shapes">Metal</label>
                  <Select
                    id="shapes"
                    defaultValue={[metalOptions[2], metalOptions[3]]}
                    isMulti
                    name="shapes"
                    options={metalOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor="shapes">Collection</label>
                  <Select
                    id="shapes"
                    defaultValue={[coolectionOptions[2], coolectionOptions[3]]}
                    isMulti
                    name="shapes"
                    options={coolectionOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div> 

                <label htmlFor="weight" className='p-0'>Weight</label>
                <select id="weight" className="bg-gray-50 w-full border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Weight1" selected>Weight1</option>
                  <option value="Weight2">Weight2</option>
                </select>

                <label htmlFor="variant" className='p-0'>Variant</label>
                <select id="variant" className="bg-gray-50 w-full border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Variant1" selected>Variant1</option>
                  <option value="Variant2">Variant2</option>
                </select>

                {/* <label htmlFor="collection" className='p-0'>Collection</label>
                <select id="collection" className="bg-gray-50 w-full border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Collection1" selected>Collection1</option>
                  <option value="Collection2">Collection2</option>
                </select> */}
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardCard06;
