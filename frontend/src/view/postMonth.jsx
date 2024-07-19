import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postMonth } from "../repository/monthSrvice"; // Adjust the import based on your file structure

const AddMonthComponent = () => {
  const now = new Date();
  const monthName = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();
  const [montant, setMontant] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const data = { montant };
      const result = await postMonth(data);
      setSuccess("Month posted successfully");
    } catch (error) {
      setError("Failed to post the month");
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Add Month/montant</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="input-group form-group">
                <input
                  type="text"
                  className="form-control"
                  value={monthName}
                  disabled
                />
              </div>
              <div className="input-group form-group">
                <input
                  type="text"
                  className="form-control"
                  value={year}
                  disabled
                />
              </div>
              <div className="input-group form-group">
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => setMontant(e.target.value)}
                />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              {/* {navigate("/acuille")} */}
              <div className="form-group">
                <input
                  type="submit"
                  value="submit"
                  className="btn float-right login_btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMonthComponent;
