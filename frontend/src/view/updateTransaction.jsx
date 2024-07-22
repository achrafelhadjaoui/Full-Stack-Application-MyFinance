import React, { useState } from 'react';
//import { Modal, Button, Form, Alert } from 'react-bootstrap';

const UpdateTransactionModal = ({ show, handleClose }) => {
  const [transaction, setTransaction] = useState('');
  const [categorie, setCategorie] = useState('');
  const [montant, setMontant] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (event) => {
//     event.preventDefault();
//     // Reset messages
//     setError(null);
//     setSuccess(null);

//     // Example validation and form submission
//     if (!transaction || !categorie || !montant) {
//       setError('Please fill all fields.');
//       return;
//     }

//     // Simulate a successful submission with a 5-second delay
//     setTimeout(() => {
//       setSuccess('Transaction added successfully!');
//       // Optionally reset the form
//       setTransaction('');
//       setCategorie('');
//       setMontant('');
//     }, 5000); // Delay of 5 seconds
//   };

  return (
    <Modal >
      {/* <Modal.Header closeButton>
        <Modal.Title>Add Transaction</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTransaction">
            <Form.Label>Transaction</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter transaction name"
              value={transaction}
              onChange={(e) => setTransaction(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="Utilitaires">Utilitaires</option>
              <option value="Alimentation">Alimentation</option>
              <option value="Logement">Logement</option>
              <option value="Transport">Transport</option>
              <option value="Santé">Santé</option>
              <option value="Education">Education</option>
              <option value="Loisirs">Loisirs</option>
              <option value="Epargne">Epargne</option>
              <option value="Autres">Autres</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formMontant">
            <Form.Label>Montant</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter amount"
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body> */}
    </Modal>
  );
};
}

export default UpdateTransactionModal;
