// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
// import AddCategory from './AddCategory';

// const Categories = () => {
//   const [categories, setCategories] = useState([
//     { name: 'Category 1', status: 'Active', urlKey: 'category-1', metaTitle: 'Meta Title 1', metaKeywords: 'Keyword1, Keyword2', metaDescription: 'Description 1', description: 'Description 1' },
//     { name: 'Category 2', status: 'Draft', urlKey: 'category-2', metaTitle: 'Meta Title 2', metaKeywords: 'Keyword3, Keyword4', metaDescription: 'Description 2', description: 'Description 2' }
//   ]);
//   const [filter, setFilter] = useState('');
//   const [showAddCategory, setShowAddCategory] = useState(false);

//   const handleAddCategory = (newCategory) => {
//     setCategories([...categories, newCategory]);
//     setShowAddCategory(false);
//   };

//   const filteredCategories = categories.filter(category =>
//     category.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <Container className="my-5">
//       {showAddCategory ? (
//         <AddCategory onAddCategory={handleAddCategory} onCancel={() => setShowAddCategory(false)} />
//       ) : (
//         <>
//           <Row className="mb-4">
//             <Col className="d-flex justify-content-between align-items-center">
//               <Form.Control
//                 type="text"
//                 placeholder="Filter categories"
//                 value={filter}
//                 onChange={(e) => setFilter(e.target.value)}
//                 className="me-3"

//               />
//               <Button variant="primary" onClick={() => setShowAddCategory(true)}>Add Category</Button>
//             </Col>
//           </Row>

//           <Row>
//             <Col>
//               <h4 className='mb-4'>Existing Categories</h4>
//               <Table striped bordered hover responsive>
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Status</th>
//                     <th>URL Key</th>
//                     <th>Meta Title</th>
//                     <th>Meta Keywords</th>
//                     <th>Meta Description</th>
//                     <th>Description</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredCategories.map((category, index) => (
//                     <tr key={index}>
//                       <td>{category.name}</td>
//                       <td>{category.status}</td>
//                       <td>{category.urlKey}</td>
//                       <td>{category.metaTitle}</td>
//                       <td>{category.metaKeywords}</td>
//                       <td>{category.metaDescription}</td>
//                       <td>{category.description}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </Col>
//           </Row>
//         </>
//       )}
//     </Container>
//   );
// };

// export default Categories;


import React, { useState, useEffect } from 'react';
import { Container, Table, Alert, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import AddCategory from './AddCategory';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');
  const [showAddCategory, setShowAddCategory] = useState(false);

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
    setShowAddCategory(false);
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    const fetchCategories = async () => {
      const token = localStorage.getItem('cdl_auth');
      try {
        const response = await axios.get('https://cdl-backend-y3jq.onrender.com/api/v1/category/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response)
        setCategories(response.data.data);
      } catch (error) {
        setError('Failed to fetch categories');
      }
    };

    fetchCategories();
  }, []);

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col className="d-flex justify-content-between align-items-center">
          <Button variant="primary" onClick={() => setShowAddCategory(true)}>Add Category</Button>
        </Col>
      </Row>
      {
        showAddCategory ? (
          <AddCategory onAddCategory={handleAddCategory} onCancel={() => setShowAddCategory(false)} />
        ) : <>
          <h2>Category List</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((category, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                  <td>{category.status === 1 ? "Active" : "Deactive"}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      }
    </Container>
  );
};

export default CategoryList;
