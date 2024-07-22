// import React, { useState, useEffect } from "react";
// import { gettransaction } from "../repository/transactionService";
// import { useNavigate } from "react-router-dom";
// import UpdateTransactionModal from "./updateTransaction";



// const Transaction = () => {

//   const [tranaction, setTransaction] = useState(null);
// const [error, setError] = useState(null);
// const navigate = useNavigate()


//   useEffect(() => {
//     const fetchtransactions = async () => {
//       try {
//         const data = await gettransaction();
//         setTransaction(data);
//       } catch (error) {
//         console.error("Error fetching transaction:", error);
//         setError("Failled to fetch transactions");
//       }
//     };
//     fetchtransactions();
//   }, []);

//   const navigateToAcuille = (e) => {
//     e.preventDefault();
//     navigate('/acuille')
//   }

//   if (error) {
//     return (
//       <div>
//       <div>{error}</div>
//       <button className="btn" onClick={navigateToAcuille}>Back</button>
//       </div>
//     )
//   }

//   if (!tranaction) {
//     return <div>Loading ...</div>
//   }

//   return (
//     <div className="container align-content-center my-3" >
//     {console.log("transactions ............",tranaction
//     )}
//       <section>
//         <div className="row" >
//         {tranaction.tranactions.map((value, index) => (
//           <div className="col-xl-6 col-md-12 mb-4" key={index} onClick={()=>{
//             console.log("clicked.............")
//             UpdateTransactionModal()}}>
//             <div className="card">
//               <div className="card-body">
//                 <div className="d-flex justify-content-between p-md-1">
//                   <div className="column ">
//                     <div className="mb-4">
//                       <div className="" style={{ display: "inline" }}>
//                         <i
//                           className="fas fa-calendar-alt text-info me-4"
//                           style={{ fontSize: "2rem" }}
//                         ></i>
//                       </div>
//                       <p className="mb-0" style={{ display: "inline" }}>
//                         {value.updatedAt}
//                       </p>
//                     </div>
//                     <h4>{value.type}</h4>
//                   </div>
//                   <div className="align-self-center">
//                     <h2 className="h1 mb-0">{value.montant}</h2>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Transaction;



import React, { useState, useEffect } from "react";
import { gettransaction } from "../repository/transactionService";
import { useNavigate } from "react-router-dom";
import UpdateTransactionModal from "./updateTransaction";

const Transaction = () => {
  const [transactions, setTransactions] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await gettransaction();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setError("Failed to fetch transactions");
      }
    };
    fetchTransactions();
  }, []);

  const navigateToAcuille = (e) => {
    e.preventDefault();
    navigate('/acuille');
  };

  const handleShowModal = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedTransaction(null);
    setShowModal(false);
  };

  if (error) {
    return (
      <div>
        <div>{error}</div>
        <button className="btn" onClick={navigateToAcuille}>Back</button>
      </div>
    );
  }

  if (!transactions) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="container align-content-center my-3">
      <section>
        <div className="row">
          {transactions.tranactions.map((value, index) => (
            <div className="col-xl-6 col-md-12 mb-4" key={index} onClick={() => {handleShowModal(value)
            localStorage.setItem("transaction", value._id)}}>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between p-md-1">
                    <div className="column">
                      <div className="mb-4">
                        <div className="" style={{ display: "inline" }}>
                          <i className="fas fa-calendar-alt text-info me-4" style={{ fontSize: "2rem" }}></i>
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
      {showModal && (
        <UpdateTransactionModal
          show={showModal}
          handleClose={handleCloseModal}
          transaction={selectedTransaction}
        />
      )}
    </div>
  );
};

export default Transaction;
