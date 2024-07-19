import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCategorie } from "../repository/categorieService"; // Adjust the import based on your file structure

const AddCategory = () => {
  const [nom, setnom] = useState("");
  const [budget, setBudget] = useState("");
  const [montant, setMontant] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const data = { nom: nom, budget, montant };
      const result = await postCategorie(data);
      setSuccess("Category posted successfully");
      // Optionally navigate to another page
      // navigate("/some-page");
    } catch (error) {
      setError("Failed to post the category");
    }
  };

  return (
    <div className="container mt-5">
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Category Name</label>
          <select
            className="form-control"
            name="nom"
            value={nom}
            onChange={(e) => setnom(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
            <option value="Category 4">Category 4</option>
            <option value="Category 5">Category 5</option>
            <option value="Category 6">Category 6</option>
            <option value="Category 7">Category 7</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="budget">Budget</label>
          <input
            type="number"
            className="form-control"
            name="budget"
            placeholder="Enter budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="montant">Montant</label>
          <input
            type="number"
            className="form-control"
            name="montant"
            placeholder="Enter montant"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddCategory;
