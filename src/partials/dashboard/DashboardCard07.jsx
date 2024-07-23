import React, { useState, useEffect } from 'react';
import RichTextEditor from './richTextEditor';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const sizeOptions = [
  { value: 'lab diamond', label: 'Lab Diamond' },
  { value: 'natural diamonds', label: 'Natural Diamonds' },
  { value: 'moissanite', label: 'Moissanite' },
  { value: 'cZ', label: 'CZ' },
];

const statusOptions = [
  { value: '1', label: 'Active' },
  { value: '0', label: 'Draft' }
];

const metalOptions = [
  { value: '18k', label: '18K' },
  { value: '14k', label: '14K' },
  { value: '10k', label: '10K' },
];

const collectionOptions = [
  { value: '60d21b9967d0d8992e610c88', label: 'Collection 1' }, // Update with actual collection labels
  { value: '60d21b9967d0d8992e610c89', label: 'Collection 2' }  // Update with actual collection labels
];

const DashboardCard07 = () => {
  const [createdOptions, setCreatedOptions] = useState([]);
  const [fields, setFields] = useState([{ name: '', weight: '', mm: '', pice: '' }]);
  const [categories, setCategories] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedMM, setSelectedMM] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    subTitle: '',
    description: '',
    category: null,
    stoneType: [],
    stone: '',
    metal: '',
    status: '',
    sku: '',
    visibility: '',
    url_key: '',
    meta_title: '',
    meta_keywords: [],
    meta_description: '',
    tags: [],
    collection: null
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const token = localStorage.getItem('cdl_auth');
      try {
        const response = await axios.get('https://cdl-backend-y3jq.onrender.com/api/v1/category/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const categoryOptions = response?.data?.data?.map(category => ({
          value: category._id,
          label: category.name
        }));
        setCategories(categoryOptions);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchProductTypes = async () => {
      const token = localStorage.getItem('cdl_auth');
      try {
        const response = await axios.get('https://cdl-backend-y3jq.onrender.com/api/v1/productType', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setProductTypes(response.data.productTypes);
      } catch (error) {
        console.error('Error fetching product types:', error);
      }
    };

    fetchCategories();
    fetchProductTypes();
  }, []);

  const handleAddFields = () => {
    setFields([...fields, { name: '', weight: '', mm: '', pice: '' }]);
  };

  const handleFieldChange = (index, field, value) => {
    const newFields = [...fields];
    newFields[index][field] = value;
    setFields(newFields);
  };

  const handleNameChange = (index, selectedOption) => {
    const newFields = [...fields];
    newFields[index].name = selectedOption;
    newFields[index].mm = null; // Reset mm selection
    setFields(newFields);
    setSelectedName(selectedOption);
    updateWeight(index, selectedOption, null); // Update weight for this field
  };

  const handleMMChange = (index, selectedOption) => {
    const newFields = [...fields];
    newFields[index].mm = selectedOption;
    setFields(newFields);
    setSelectedMM(selectedOption);
    updateWeight(index, selectedName, selectedOption); // Update weight for this field
  };

  const updateWeight = (index, nameOption, mmOption) => {
    if (nameOption && mmOption) {
      const selectedProductType = productTypes.find(type => type.name === nameOption.value);
      if (selectedProductType) {
        const detail = selectedProductType.details.find(detail => detail.mm === parseFloat(mmOption.value));
        const weight = detail ? detail.carat_weight : '';
        const updatedFields = [...fields];
        updatedFields[index].weight = weight;
        setFields(updatedFields);
      }
    }
  };

  const nameOptions = productTypes.map(type => ({ value: type.name, label: type.name }));
  const mmOptions = selectedName ?
    productTypes.find(type => type.name === selectedName.value)?.details.map(detail => ({ value: detail.mm, label: detail.mm })) :
    [];

  const handleCreateChange = (options) => {
    setCreatedOptions(options || []);
  };

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData({ ...formData, [name]: selectedOption });
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleMultiSelectChange = (options, { name }) => {
    setFormData({ ...formData, [name]: options.map(option => option.value) });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('cdl_auth');

    const payload = {
      ...formData,
      stoneType: fields.map(field => ({
        name: field.name,
        detailId: field.pice // Adjust as needed based on API
      })),
      meta_keywords: createdOptions.map(option => option.value),
      tags: formData.tags // Ensure tags is an array of strings
    };

    try {
      const response = await axios.post('https://cdl-backend-y3jq.onrender.com/api/v1/product', payload, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('Product created successfully:', response.data);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* Form and other components */}
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
                            <input
                              type="text"
                              className='bg-gray-50 w-full border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="list_input_fil">
                            <label htmlFor="">Sub-Title</label>
                            <br />
                            <input
                              type="text"
                              className='bg-gray-50 w-full border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              name="subTitle"
                              value={formData.subTitle}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        {/* ... Other fields ... */}
                        <div className="w-full">
                          <RichTextEditor
                            value={formData.description}
                            onChange={(value) => setFormData({ ...formData, description: value })}
                          />
                        </div>
                      </div>
                      <div className="w-full mb-3">
                        <h6 className='mb-3'>Media</h6>
                        {/* Media upload component */}
                      </div>
                      <div className="w-full mb-3">
                        <label htmlFor="shapes">Stone Type</label>
                        <Select
                          id="shapes"
                          isMulti
                          name="stoneType"
                          options={sizeOptions}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          onChange={(options) => handleMultiSelectChange(options, { name: 'stoneType' })}
                        />
                      </div>
                      <div className="w-full mb-3">
                        <button className="btn btn-primary mb-3" onClick={handleAddFields}>Add Fields</button>
                        {fields.map((field, index) => (
                          <div className="">

                            <div key={index} className="row mb-3">
                              <div className="col-md-3 mb-3">
                                <label htmlFor={`name-${index}`}>Name</label>
                                <Select
                                  id={`name-${index}`}
                                  options={nameOptions}
                                  onChange={(option) => handleNameChange(index, option)}
                                  value={field.name}
                                  placeholder="Select Name"
                                />
                              </div>
                              <div className="col-md-3 mb-3">
                                <label htmlFor={`mm-${index}`}>MM</label>
                                <Select
                                  id={`mm-${index}`}
                                  options={mmOptions}
                                  onChange={(option) => handleMMChange(index, option)}
                                  value={field.mm}
                                  placeholder="Select MM"
                                />
                              </div>
                              <div className="col-md-3 mb-3">
                                <label htmlFor={`weight-${index}`}>Weight</label>
                                <input
                                  type="text"
                                  id={`weight-${index}`}
                                  className="form-control"
                                  value={field.weight}
                                  readOnly
                                />
                              </div>
                              <div className="col-md-3 mb-3">
                                <label htmlFor={`pice-${index}`}>Pice</label>
                                <input
                                  type="text"
                                  id={`pice-${index}`}
                                  className="form-control"
                                  value={field.pice}
                                  onChange={event => handleFieldChange(index, 'pice', event.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <div className="overflow-x-auto">
            <section className='listing px-6 py-6'>
              <div className="w-full">
                <form className='w-full' onSubmit={handleSubmit}>
                  <div className="row flex">
                    <div className='mb-3'>
                      <label htmlFor="product-status" style={{ display: 'block', marginBottom: '10px' }}>Product Status</label>
                      <Select
                        id="product-status"
                        name="status"
                        options={statusOptions}
                        className="basic-single-select"
                        classNamePrefix="select"
                        onChange={(option) => handleSelectChange(option, { name: 'status' })}
                      />
                    </div>

                    <div className='mb-3'>
                      <label htmlFor="category">Category</label>
                      <Select
                        id="category"
                        name="category"
                        options={categories}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={(option) => handleSelectChange(option, { name: 'category' })}
                      />
                    </div>

                    <div className='mb-3'>
                      <label htmlFor="metal">Metal</label>
                      <Select
                        id="metal"
                        defaultValue={[metalOptions[0]]}
                        name="metal"
                        options={metalOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={(option) => handleSelectChange(option, { name: 'metal' })}
                      />
                    </div>

                    <div className='mb-3'>
                      <label htmlFor="collection">Collection</label>
                      <Select
                        id="collection"
                        isMulti
                        name="collection"
                        options={collectionOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={(options) => handleMultiSelectChange(options, { name: 'collection' })}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </section>
          </div>
        </div>
        <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <div className="p-3">
            <div className="overflow-x-auto">
              <section className='listing sm:py-1 lg:py-2 sm:px-1 lg:px-6'>
                <div className="container">
                  <div className="row">
                    <div className="list_main">
                      <h5 className='py-3'>SEO</h5>
                      <div className="w-full">
                        <div className="list_input_fil mb-3">
                          <label htmlFor="">Url key</label>
                          <br />
                          <input
                            type="text"
                            className='bg-gray-50 w-full border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            name="url_key"
                            value={formData.url_key}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="list_input_fil mb-3">
                          <label htmlFor="">Meta title</label>
                          <br />
                          <input
                            type="text"
                            className='bg-gray-50 w-full border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            name="meta_title"
                            value={formData.meta_title}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="mb-3 form-field-container null">
                          <label htmlFor="meta_keywords">Meta keywords</label>
                          <CreatableSelect
                            isMulti
                            value={createdOptions}
                            onChange={handleCreateChange}
                            placeholder="Type a keyword and press enter"
                            id="meta-keywords"
                            name="meta_keywords"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="list_input_fil mb-3">
                          <label htmlFor="">Meta description</label>
                          <br />
                          <textarea
                            type="text"
                            className='bg-gray-50 w-full border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            name="meta_description"
                            value={formData.meta_description}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCard07;
