// import React, { useState } from 'react';
// import { updateTransaction } from '../repository/transactionService';
// import { Modal, Button, Form, Alert } from 'react-bootstrap';

// const UpdateTransactionModal = ({ show, handleClose, transaction }) => {
//   const [transactionName, setTransactionName] = useState(transaction?.type || '');
//   const [categorie, setCategorie] = useState(transaction?.typeCategorie || '');
//   const [montant, setMontant] = useState(transaction?.montant || '');
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // Reset messages
//     setError(null);
//     setSuccess(null);

//     try {
//     // Example validation and form submission
//     if (!transactionName || !categorie || !montant) {
//       setError('Please fill all fields.');
//       return;
//     }
//     const data = {type: transactionName, montant}
//     const result = await updateTransaction(data)
//     // Simulate a successful submission
//     setSuccess('Transaction updated successfully!');
//   }catch (error) {
//     console.error("Failed to update the category")
//     setError("Failed to update the category")
//   }

//     // Hide the success message after 5 seconds
//     setTimeout(() => {
//       setError(null)
//       setSuccess(null);
//       handleClose(); // Close the modal after success
//     }, 5000); // 5000 milliseconds = 5 seconds
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Update Transaction</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {error && <Alert variant="danger">{error}</Alert>}
//         {success && <Alert variant="success">{success}</Alert>}
//         <Form onSubmit={handleSubmit} >
//           <Form.Group controlId="formTransaction" className='mb-3'>
//             <Form.Label>Transaction</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter transaction name"
//               value={transactionName}
//               onChange={(e) => setTransactionName(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="formCategory" className='mb-3'>
//             <Form.Label>Category</Form.Label>
//             <Form.Control
//               type="text"
//               value={categorie}
//               disabled
//             />

//           </Form.Group>
//           <Form.Group controlId="formMontant" className='mb-3'>
//             <Form.Label>Montant</Form.Label>
//             <Form.Control
//               type="number"
//               placeholder="Enter amount"
//               value={montant}
//               onChange={(e) => setMontant(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <div className='row justify-content-between px-3'>
//           <Button variant="primary" type="submit" className='mb-3'>
//             Submit
//           </Button>
//           <Button variant="secondary"  className='mb-3' onClick={delete}>
//             Delete
//           </Button>
//           </div>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default UpdateTransactionModal;


import React, { useState } from 'react';
import { updateTransaction, deleteTransaction } from '../repository/transactionService';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

const UpdateTransactionModal = ({ show, handleClose, transaction }) => {
  const [transactionName, setTransactionName] = useState(transaction?.type || '');
  const [categorie, setCategorie] = useState(transaction?.typeCategorie || '');
  const [montant, setMontant] = useState(transaction?.montant || '');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      if (!transactionName || !categorie || !montant) {
        setError('Please fill all fields.');
        return;
      }
      const data = { type: transactionName, montant };
      await updateTransaction(data);
      setSuccess('Transaction updated successfully!');
    } catch (error) {
      console.error("Failed to update the transaction");
      setError("Failed to update the transaction");
    }

    setTimeout(() => {
      setError(null);
      setSuccess(null);
      handleClose();
    }, 5000);
  };

  const handleDelete = async () => {
    setError(null);
    setSuccess(null);

    try {
      await deleteTransaction();
      setSuccess('Transaction deleted successfully!');
      setTimeout(() => {
        setError(null);
        setSuccess(null);
        handleClose();
      }, 5000);
    } catch (error) {
      console.error("Failed to delete the transaction");
      setError("Failed to delete the transaction");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Transaction</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTransaction" className='mb-3'>
            <Form.Label>Transaction</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter transaction name"
              value={transactionName}
              onChange={(e) => setTransactionName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formCategory" className='mb-3'>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={categorie}
              disabled
            />
          </Form.Group>
          <Form.Group controlId="formMontant" className='mb-3'>
            <Form.Label>Montant</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter amount"
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
              required
            />
          </Form.Group>
          <div className='row justify-content-between px-3'>
            <Button variant="primary" type="submit" className='mb-3'>
              Submit
            </Button>
            <Button variant="danger" className='mb-3' onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateTransactionModal;
