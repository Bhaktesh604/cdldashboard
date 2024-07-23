// import React, { useState } from 'react';

// const ProductForm = () => {
//   const [products, setProducts] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [sku, setSku] = useState('');
//   const [weight, setWeight] = useState('');
//   const [size, setSize] = useState('');
//   const [pieces, setPieces] = useState('');
//   const [goldRate, setGoldRate] = useState(7500); // example rate per gram
//   const [subtotal, setSubtotal] = useState('');

//   const handleAddProduct = () => {
//     const newProduct = {
//       title,
//       description,
//       sku,
//       weight,
//       size,
//       pieces,
//       subtotal: calculatePrice(weight, size, pieces, goldRate),
//     };

//     setProducts([...products, newProduct]);
//     clearForm();
//   };

//   const calculatePrice = (weight, size, pieces, rate) => {
//     const totalWeight = weight * size * pieces;
//     const price = totalWeight * rate;
//     return price.toFixed(2);
//   };

//   const clearForm = () => {
//     setTitle('');
//     setDescription('');
//     setSku('');
//     setWeight('');
//     setSize('');
//     setPieces('');
//     setSubtotal('');
//   };

//   return (
//     <div className="p-6 bg-gray-100">
//       <div className="mb-4">
//         <label className="block text-gray-700">Stone Name</label>
//         <input
//           type="text"
//           className="mt-1 block w-full"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">MM</label>
//         <input
//           type="text"
//           className="mt-1 block w-full"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">carat_weight</label>
//         <input
//           type="text"
//           className="mt-1 block w-full"
//           value={sku}
//           onChange={(e) => setSku(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">vvs_ef</label>
//         <input
//           type="number"
//           className="mt-1 block w-full"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">vvs_vs_gh</label>
//         <input
//           type="number"
//           className="mt-1 block w-full"
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">vs_ef</label>
//         <input
//           type="number"
//           className="mt-1 block w-full"
//           value={pieces}
//           onChange={(e) => setPieces(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">vs_gh</label>
//         <input
//           type="number"
//           className="mt-1 block w-full"
//           value={pieces}
//           onChange={(e) => setPieces(e.target.value)}
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700">SI-GH</label>
//         <input
//           type="number"
//           className="mt-1 block w-full"
//           value={pieces}
//           onChange={(e) => setPieces(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">SI-HI
//         </label>
//         <input
//           type="number"
//           className="mt-1 block w-full"
//           value={pieces}
//           onChange={(e) => setPieces(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">SI-IJ
//         </label>
//         <input
//           type="number"
//           className="mt-1 block w-full"
//           value={pieces}
//           onChange={(e) => setPieces(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">I1-I2/HI
//         </label>
//         <input
//           type="number"
//           className="mt-1 block w-full"
//           value={pieces}
//           onChange={(e) => setPieces(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">I1-I2/IJ
//         </label>
//         <input
//           type="number"
//           className="mt-1 block w-full"
//           value={pieces}
//           onChange={(e) => setPieces(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">I1-I2/JK
//         </label>
//         <input
//           type="number"
//           className="mt-1 block w-full"
//           value={pieces}
//           onChange={(e) => setPieces(e.target.value)}
//         />
//       </div>
//       {/* <div className="mb-4">
//         <label className="block text-gray-700">Subtotal (Auto-calculated)</label>
//         <input
//           type="text"
//           className="mt-1 block w-full"
//           value={calculatePrice(weight, pieces, goldRate)}
//           readOnly
//         />
//       </div> */}
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleAddProduct}
//       >
//         Add Product
//       </button>

//       <h2 className="mt-6 text-2xl">Round</h2>
//       <table className="min-w-full leading-normal">
//         <thead>
//           <tr>
//             <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//             name
//             </th>
//             <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//             mm
//             </th>
//             <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//             carat_weight
//             </th>
//             <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//             vvs_ef
//             </th>
//             <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//             vvs_vs_gh
//             </th>
//             <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//             vs_ef
//             </th>
//             <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//             vs_gh
//             </th>
//             {/* <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//               Subtotal
//             </th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => (
//             <tr key={index}>
//               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                 {product.title}
//               </td>
//               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                 {product.description}
//               </td>
//               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                 {product.sku}
//               </td>
//               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                 {product.weight}
//               </td>
//               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                 {product.size}
//               </td>
//               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                 {product.pieces}
//               </td>
//               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                 ₹{product.subtotal}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [sku, setSku] = useState('');
  const [weight, setWeight] = useState('');
  const [size, setSize] = useState('');
  const [pieces, setPieces] = useState('');
  const [goldRate, setGoldRate] = useState(7500); // example rate per gram
  const [subtotal, setSubtotal] = useState('');
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem('cdl_auth');
      const response = await axios.get('https://cdl-backend-y3jq.onrender.com/api/v1/productType', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response)
      if (response.status === 200) {
        setCategories(response.data.productTypes);
      } else {
        setError('Failed to fetch categories');
      }
    } catch (error) {
      setError('Failed to fetch categories');
    }
  };

  const handleAddProduct = async () => {
    const newProduct = {
      title,
      description,
      sku,
      weight,
      size,
      pieces,
      subtotal: calculatePrice(weight, size, pieces, goldRate),
    };

    try {
      const token = localStorage.getItem('cdl_auth');
      const response = await axios.post('https://cdl-backend-y3jq.onrender.com/api/v1/productType', {
        name: newProduct.title,
        mm: parseFloat(newProduct.description),
        carat_weight: parseFloat(newProduct.sku),
        vvs_ef: parseFloat(newProduct.weight),
        vvs_vs_gh: parseFloat(newProduct.size),
        vs_ef: parseFloat(newProduct.pieces),
        vs_gh: parseFloat(newProduct.pieces),
        // Add other properties as needed
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 201) {
        setProducts([...products, newProduct]);
        clearForm();
      } else {
        setError('Failed to add product');
      }
    } catch (error) {
      setError('Failed to add product');
    }
  };

  const calculatePrice = (weight, size, pieces, rate) => {
    const totalWeight = weight * size * pieces;
    const price = totalWeight * rate;
    return price.toFixed(2);
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setSku('');
    setWeight('');
    setSize('');
    setPieces('');
    setSubtotal('');
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="mb-4">
        <label className="block text-gray-700">Stone Name</label>
        <input
          type="text"
          className="mt-1 block w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">MM</label>
        <input
          type="text"
          className="mt-1 block w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">carat_weight</label>
        <input
          type="text"
          className="mt-1 block w-full"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">vvs_ef</label>
        <input
          type="number"
          className="mt-1 block w-full"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">vvs_vs_gh</label>
        <input
          type="number"
          className="mt-1 block w-full"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">vs_ef</label>
        <input
          type="number"
          className="mt-1 block w-full"
          value={pieces}
          onChange={(e) => setPieces(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">vs_gh</label>
        <input
          type="number"
          className="mt-1 block w-full"
          value={pieces}
          onChange={(e) => setPieces(e.target.value)}
        />
      </div>
      
      {/* <div className="mb-4">
        <label className="block text-gray-700">Subtotal (Auto-calculated)</label>
        <input
          type="text"
          className="mt-1 block w-full"
          value={calculatePrice(weight, pieces, goldRate)}
          readOnly
        />
      </div> */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddProduct}
      >
        Add Product
      </button>

      <h2 className="mt-6 text-2xl">Products</h2>
      <table className="min-w-full leading-normal">
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {product.title}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {product.description}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {product.sku}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {product.weight}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {product.size}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {product.pieces}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {categories.map((category, index) => (
        <div key={index}>
          <h3 className="mt-4 text-xl">{category.name}</h3>
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  MM
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Carat Weight
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  VVS EF
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  VVS VS GH
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  VS EF
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  VS GH
                </th>
              </tr>
            </thead>
            <tbody>
              {category.details.map((detail, detailIndex) => (
                <tr key={detailIndex}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {detail.mm}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {detail.carat_weight}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {detail.vvs_ef}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {detail.vvs_vs_gh}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {detail.vs_ef}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {detail.vs_gh}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default ProductForm;

