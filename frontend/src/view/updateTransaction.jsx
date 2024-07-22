// import React, { useState } from 'react';
// //import { Modal, Button, Form, Alert } from 'react-bootstrap';

// const UpdateTransactionModal = () => {
//   // const [transaction, setTransaction] = useState('');
//   // const [categorie, setCategorie] = useState('');
//   // const [montant, setMontant] = useState('');
//   // const [error, setError] = useState(null);
//   // const [success, setSuccess] = useState(null);

// //   const handleSubmit = (event) => {
// // //     event.preventDefault();
// // //     // Reset messages
// // //     setError(null);
// // //     setSuccess(null);

// // //     // Example validation and form submission
// // //     if (!transaction || !categorie || !montant) {
// // //       setError('Please fill all fields.');
// // //       return;
// // //     }

// // //     // Simulate a successful submission with a 5-second delay
// // //     setTimeout(() => {
// // //       setSuccess('Transaction added successfully!');
// // //       // Optionally reset the form
// // //       setTransaction('');
// // //       setCategorie('');
// // //       setMontant('');
// // //     }, 5000); // Delay of 5 seconds
// // //   };

// //   return (
// //     <Modal >
// //       {/* <Modal.Header closeButton>
// //         <Modal.Title>Add Transaction</Modal.Title>
// //       </Modal.Header>
// //       <Modal.Body>
// //         {error && <Alert variant="danger">{error}</Alert>}
// //         {success && <Alert variant="success">{success}</Alert>}
// //         <Form onSubmit={handleSubmit}>
// //           <Form.Group controlId="formTransaction">
// //             <Form.Label>Transaction</Form.Label>
// //             <Form.Control
// //               type="text"
// //               placeholder="Enter transaction name"
// //               value={transaction}
// //               onChange={(e) => setTransaction(e.target.value)}
// //               required
// //             />
// //           </Form.Group>
// //           <Form.Group controlId="formCategory">
// //             <Form.Label>Category</Form.Label>
// //             <Form.Control
// //               as="select"
// //               value={categorie}
// //               onChange={(e) => setCategorie(e.target.value)}
// //               required
// //             >
// //               <option value="">Select a category</option>
// //               <option value="Utilitaires">Utilitaires</option>
// //               <option value="Alimentation">Alimentation</option>
// //               <option value="Logement">Logement</option>
// //               <option value="Transport">Transport</option>
// //               <option value="Santé">Santé</option>
// //               <option value="Education">Education</option>
// //               <option value="Loisirs">Loisirs</option>
// //               <option value="Epargne">Epargne</option>
// //               <option value="Autres">Autres</option>
// //             </Form.Control>
// //           </Form.Group>
// //           <Form.Group controlId="formMontant">
// //             <Form.Label>Montant</Form.Label>
// //             <Form.Control
// //               type="number"
// //               placeholder="Enter amount"
// //               value={montant}
// //               onChange={(e) => setMontant(e.target.value)}
// //               required
// //             />
// //           </Form.Group>
// //           <Button variant="primary" type="submit">
// //             Submit
// //           </Button>
// //         </Form>
// //       </Modal.Body> */}
// //     </Modal>
// //   );
// // };


// return (
//   <div>Helloooooooooo</div>
// )
// }

// export default UpdateTransactionModal;


import React, { useState } from 'react';
import { updateTransaction } from '../repository/transactionService';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

const UpdateTransactionModal = ({ show, handleClose, transaction }) => {
  const [transactionName, setTransactionName] = useState(transaction?.type || '');
  const [categorie, setCategorie] = useState(transaction?.typeCategorie || '');
  const [montant, setMontant] = useState(transaction?.montant || '');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Reset messages
    setError(null);
    setSuccess(null);

    try {
    // Example validation and form submission
    if (!transactionName || !categorie || !montant) {
      setError('Please fill all fields.');
      return;
    }
    const data = {type: transactionName, montant}
    const result = await updateTransaction(data)
    // Simulate a successful submission
    setSuccess('Transaction updated successfully!');
  }catch (error) {
    console.error("Failed to update the category")
    setError("Failed to update the category")
  }

    // Hide the success message after 5 seconds
    setTimeout(() => {
      setError(null)
      setSuccess(null);
      handleClose(); // Close the modal after success
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Transaction</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={handleSubmit} >
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
          <Button variant="primary" type="submit" className='mb-3'>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateTransactionModal;
