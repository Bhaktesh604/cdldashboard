// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

// const AddCategory = ({ onAddCategory, onCancel }) => {
//   const [newCategory, setNewCategory] = useState({
//     name: '',
//     status: 'Active',
//     urlKey: '',
//     metaTitle: '',
//     metaKeywords: '',
//     metaDescription: '',
//     description: ''
//   });

//   const handleAddCategory = (e) => {
//     e.preventDefault();
//     onAddCategory(newCategory);
//     setNewCategory({
//       name: '',
//       status: 'Active',
//       urlKey: '',
//       metaTitle: '',
//       metaKeywords: '',
//       metaDescription: '',
//       description: ''
//     });
//   };

//   return (
//     <Container className="my-5">
//       <h2>Add New Category</h2>
//       <Form onSubmit={handleAddCategory}>
//         <Card className="mb-3">
//           <Card.Body>
//             <Card.Title>General Information</Card.Title>
//             <Form.Group controlId="categoryName">
//               <Form.Label>Category Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter category name"
//                 value={newCategory.name}
//                 onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="categoryDescription" className="mt-2">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 placeholder="Enter category description"
//                 value={newCategory.description}
//                 onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
//                 required
//               />
//             </Form.Group>
//           </Card.Body>
//         </Card>
//         <Card className="mb-3">
//           <Card.Body>
//             <Card.Title>Status</Card.Title>
//             <Form.Group controlId="categoryStatus">
//               <Form.Label>Status</Form.Label>
//               <Form.Control
//                 as="select"
//                 value={newCategory.status}
//                 onChange={(e) => setNewCategory({ ...newCategory, status: e.target.value })}
//               >
//                 <option>Active</option>
//                 <option>Draft</option>
//               </Form.Control>
//             </Form.Group>
//           </Card.Body>
//         </Card>
//         <Card className="mb-3">
//           <Card.Body>
//             <Card.Title>SEO Fields</Card.Title>
//             <Form.Group controlId="categoryUrlKey">
//               <Form.Label>URL Key</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter URL key"
//                 value={newCategory.urlKey}
//                 onChange={(e) => setNewCategory({ ...newCategory, urlKey: e.target.value })}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="categoryMetaTitle" className="mt-2">
//               <Form.Label>Meta Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter meta title"
//                 value={newCategory.metaTitle}
//                 onChange={(e) => setNewCategory({ ...newCategory, metaTitle: e.target.value })}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="categoryMetaKeywords" className="mt-2">
//               <Form.Label>Meta Keywords</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter meta keywords"
//                 value={newCategory.metaKeywords}
//                 onChange={(e) => setNewCategory({ ...newCategory, metaKeywords: e.target.value })}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="categoryMetaDescription" className="mt-2">
//               <Form.Label>Meta Description</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter meta description"
//                 value={newCategory.metaDescription}
//                 onChange={(e) => setNewCategory({ ...newCategory, metaDescription: e.target.value })}
//                 required
//               />
//             </Form.Group>
//           </Card.Body>
//         </Card>
//         <Button variant="primary" type="submit" className="mt-3">Add Category</Button>
//         <Button variant="secondary" className="mt-3 ms-3" onClick={onCancel}>Cancel</Button>
//       </Form>
//     </Container>
//   );
// };

// export default AddCategory;


import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';

const AddCategory = ({ onAddCategory, onCancel }) => {
  const [newCategory, setNewCategory] = useState({
    name: '',
    status: 'Active',
    urlKey: '',
    metaTitle: '',
    metaKeywords: '',
    metaDescription: '',
    description: ''
  });
  const [error, setError] = useState('');

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('cdl_auth'); // Fetch the token from local storage
    try {
      const response = await axios.post('https://cdl-backend-y3jq.onrender.com/api/v1/category/', {
        name: newCategory.name
      }, {
        headers: {
          'Authorization': `Bearer ${token}` // Add the authorization header
        }
      });
      if (response.status === 201) {
        onAddCategory(newCategory);
        setNewCategory({
          name: '',
          status: 'Active',
          urlKey: '',
          metaTitle: '',
          metaKeywords: '',
          metaDescription: '',
          description: ''
        });
      } else {
        setError('Failed to add category');
      }
    } catch (error) {
      setError('Failed to add category');
    }
  };

  return (
    <Container className="my-5">
      <h2>Add New Category</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <Form onSubmit={handleAddCategory}>
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>General Information</Card.Title>
            <Form.Group controlId="categoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category name"
                value={newCategory.name}
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                required
              />
            </Form.Group>
          </Card.Body>
        </Card>
        <Button variant="primary" type="submit" className="mt-3">Add Category</Button>
        <Button variant="secondary" className="mt-3 ms-3" onClick={onCancel}>Cancel</Button>
      </Form>
    </Container>
  );
};

export default AddCategory;
