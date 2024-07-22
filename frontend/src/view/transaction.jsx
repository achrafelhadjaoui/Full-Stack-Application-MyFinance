import React, { useState, useEffect } from "react";
import { gettransaction } from "../repository/transactionService";
import { useNavigate } from "react-router-dom";
import UpdateTransactionModal from "./updateTransaction";



const Transaction = () => {

  const [tranaction, setTransaction] = useState(null);
const [error, setError] = useState(null);
const navigate = useNavigate()


  useEffect(() => {
    const fetchtransactions = async () => {
      try {
        const data = await gettransaction();
        setTransaction(data);
      } catch (error) {
        console.error("Error fetching transaction:", error);
        setError("Failled to fetch transactions");
      }
    };
    fetchtransactions();
  }, []);

  const navigateToAcuille = (e) => {
    e.preventDefault();
    navigate('/acuille')
  }

  if (error) {
    return (
      <div>
      <div>{error}</div>
      <button className="btn" onClick={navigateToAcuille}>Back</button>
      </div>
    )
  }

  if (!tranaction) {
    return <div>Loading ...</div>
  }

  return (
    <div className="container align-content-center my-3">
    {console.log("transactions ............",tranaction
    )}
      <section>
        <div className="row">
        {tranaction.tranactions.map((value, index) => (
          <div className="col-xl-6 col-md-12 mb-4" key={index} onClick={UpdateTransactionModal}>
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between p-md-1">
                  <div className="column ">
                    <div className="mb-4">
                      <div className="" style={{ display: "inline" }}>
                        <i
                          className="fas fa-calendar-alt text-info me-4"
                          style={{ fontSize: "2rem" }}
                        ></i>
                      </div>
                      <p className="mb-0" style={{ display: "inline" }}>
                        {value.updatedAt}
                      </p>
                    </div>
                    <h4>{value.type}</h4>
                  </div>
                  <div className="align-self-center">
                    <h2 className="h1 mb-0">{value.montant}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </section>
    </div>
  );
};

export default Transaction;
