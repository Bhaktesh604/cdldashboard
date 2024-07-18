import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06() {

  const chartData = {
    labels: ['United States', 'Italy', 'Other'],
    datasets: [
      {
        label: 'Top Countries',
        data: [
          35, 30, 35,
        ],
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
      {/* <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Top Countries</h2>
      </header>  */}
      <div className="overflow-x-auto">
        <section className='listing px-6 py-6'>
          <div className="w-full">
            <form className='w-full  '>

              <div className="row flex">
                <label htmlFor="" className='p-0'>Status</label>
                <select id="countries" class="bg-gray-50 w-[100%] border mb-2  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Description" selected>Active</option>
                  <option value="Media">Draft</option>
                </select>

                <label htmlFor="" className='p-0'>Ring Size</label>
                <select id="countries" class="bg-gray-50 w-[100%] border mb-2  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="" selected>5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                  <option value="">13</option>
                  <option value="">14</option>
                  <option value="">15</option>
                  <option value="">16</option>
                  <option value="">17</option>
                  <option value="">18</option>
                  <option value="">19</option>
                  <option value="">20</option>
                  <option value="">21</option>
                  <option value="">22</option>
                  <option value="">23</option>
                  <option value="">24</option>
                  <option value="">25</option>
                </select>

                <label htmlFor="" className='p-0'>Necklace Size</label>
                <select id="countries" class="bg-gray-50 w-[100%] border mb-2  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value=" " selected>14 Inch</option>
                  <option value=" ">16 Inch</option>
                  <option value=" ">18 Inch</option>
                  <option value=" ">20 Inch</option>
                </select>

                <label htmlFor="" className='p-0'>Bracelete Size</label>
                <select id="countries" class="bg-gray-50 w-[100%] border mb-2  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value=" " selected>5 Inch</option>
                  <option value=" ">6 Inch</option>
                  <option value=" ">7 Inch</option>
                  <option value=" ">8 Inch</option>
                </select>


                <label htmlFor="" className='p-0'>Primary Stone Shape</label>
                <select id="countries" class="bg-gray-50 w-[100%] border mb-2  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Description" selected>Round</option>
                  <option value="Media">Square</option>
                </select>


                <label htmlFor="" className='p-0'>Metal</label>
                <select id="countries" class="bg-gray-50 w-[100%] border mb-2  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Description" selected>18KT</option>
                  <option value="Media">14KT</option>
                  <option value="Media">10KT</option>
                  <option value="Media">925 Silver</option>
                </select>
                <label htmlFor="" className='p-0'>Weight</label>
                <select id="countries" class="bg-gray-50 w-[100%] border mb-2  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Description" selected>Active</option>
                  <option value="Media">Draft</option>
                </select>
                <label htmlFor="" className='p-0'>Variant</label>
                <select id="countries" class="bg-gray-50 w-[100%] border mb-2  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Description" selected>Active</option>
                  <option value="Media">Draft</option>
                </select>

                <label htmlFor="" className='p-0'>Collection</label>
                <select id="countries" class="bg-gray-50 w-[100%] border mb-2  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Description" selected>Active</option>
                  <option value="Media">Draft</option>
                </select>  
              </div>
              {/* <div className="row flex">
                <select id="countries" class="bg-gray-50 w-[370px] border me-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Collection</option>
                  <option value="Description">Description</option>
                  <option value="Media">Media</option>
                  <option value="Collection">Collection</option>
                  <option value="Pricing">Pricing</option>
                  <option value="Stock">Stock</option>
                  <option value="SKU">SKU</option>
                  <option value="Weight">Weight</option>
                  <option value="Variant">Variant</option>
                </select>
                <select id="countries" class="bg-gray-50 w-[370px] border me-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Pricing</option>
                  <option value="Description">Description</option>
                  <option value="Media">Media</option>
                  <option value="Collection">Collection</option>
                  <option value="Pricing">Pricing</option>
                  <option value="Stock">Stock</option>
                  <option value="SKU">SKU</option>
                  <option value="Weight">Weight</option>
                  <option value="Variant">Variant</option>
                </select>
              </div>
              <div className="row flex">
                <select id="countries" class="bg-gray-50 w-[370px] border me-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Stock</option>
                  <option value="Description">Description</option>
                  <option value="Media">Media</option>
                  <option value="Collection">Collection</option>
                  <option value="Pricing">Pricing</option>
                  <option value="Stock">Stock</option>
                  <option value="SKU">SKU</option>
                  <option value="Weight">Weight</option>
                  <option value="Variant">Variant</option>
                </select>
                <select id="countries" class="bg-gray-50 w-[370px] border me-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>SKU</option>
                  <option value="Description">Description</option>
                  <option value="Media">Media</option>
                  <option value="Collection">Collection</option>
                  <option value="Pricing">Pricing</option>
                  <option value="Stock">Stock</option>
                  <option value="SKU">SKU</option>
                  <option value="Weight">Weight</option>
                  <option value="Variant">Variant</option>
                </select>
              </div>
              <div className="row flex">
                <select id="countries" class="bg-gray-50 w-[370px] border me-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Weight</option>
                  <option value="Description">Description</option>
                  <option value="Media">Media</option>
                  <option value="Collection">Collection</option>
                  <option value="Pricing">Pricing</option>
                  <option value="Stock">Stock</option>
                  <option value="SKU">SKU</option>
                  <option value="Weight">Weight</option>
                  <option value="Variant">Variant</option>
                </select>
                <select id="countries" class="bg-gray-50 w-[370px] border me-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Variant</option>
                  <option value="Description">Description</option>
                  <option value="Media">Media</option>
                  <option value="Collection">Collection</option>
                  <option value="Pricing">Pricing</option>
                  <option value="Stock">Stock</option>
                  <option value="SKU">SKU</option>
                  <option value="Weight">Weight</option>
                  <option value="Variant">Variant</option>
                </select>
              </div> */}
            </form>
          </div>
        </section>
      </div>
    </div>

  );
}

export default DashboardCard06;
