import React, { useState } from "react";
import { postTransaction } from "../repository/transactionService";

const AddTransaction = () => {
  const [montant, setMontant] = useState("");
  const [categorie, setCategorie] = useState("");
  const [transaction, setTransaction] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const data = { type: transaction, montant, typeCategorie: categorie };
      const result = await postTransaction(data);
      setSuccess("Transaction added successfully!");
      setTimeout(() => {
        setSuccess(null);
       
      }, 5000);
      
    } catch (error) {
      setError("Failed to add transaction");
      setTimeout(() => {
        setError(null);
       
      }, 5000);
    }
    setTransaction("");
      setCategorie("");
      setMontant("");
  };

  return (
    <div className="container mt-5">
      <h2>Add Transaction</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="transaction">transaction</label>
          <input
            type="string"
            className="form-control"
            id="transaction"
            value={transaction}
            onChange={(e) => setTransaction(e.target.value)}
            placeholder="Enter name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="categorie">Category</label>
          <select
            className="form-control"
            id="categorie"
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
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="montant">Montant</label>
          <input
            type="number"
            className="form-control"
            id="montant"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
