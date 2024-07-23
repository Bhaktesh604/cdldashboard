import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';

const initialProducts = [
  { id: 1, photo: 'https://via.placeholder.com/50', name: 'Product 1', details: 'Details 1' },
  { id: 2, photo: 'https://via.placeholder.com/50', name: 'Product 2', details: 'Details 2' },
];

const ProductListing = () => {
  const [products, setProducts] = useState(initialProducts);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setShowEditModal(true);
  };

  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleSaveChanges = () => {
    setProducts(products.map((product) => (product.id === currentProduct.id ? currentProduct : product)));
    setShowEditModal(false);
  };

  return (
    <Container className="my-5">
      <h2>Product Listing</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><img src={product.photo} alt={product.name} /></td>
              <td>{product.name}</td>
              <td>{product.details}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(product)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentProduct && (
            <Form>
              <Form.Group controlId="productName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={currentProduct.name}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="productDetails" className="mt-2">
                <Form.Label>Details</Form.Label>
                <Form.Control
                  type="text"
                  value={currentProduct.details}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, details: e.target.value })}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProductListing;
