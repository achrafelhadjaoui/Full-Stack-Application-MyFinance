import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../repository/categorieService"; // Adjust the import based on your file structure

const Categories = () => {
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to fetch categories");
      }
    };
    fetchCategories();
  }, []);


  const navigateToAddCategorie = (e) => {
    e.preventDefault();
    navigate("/categorie");
  };

  if (error) {
    return (
      <div className="container">
        <div>{error}</div>
      </div>
    );
  }

  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    
  //   <div className="container align-content-center my-3">
  //   {console.log(categories)}
  //   <section>
  //     <div className="column">
  //     {categories.map((category, index) => (
  //       <div className="col-xl-6 col-md-12 mb-2" key={index}>
  //         <div className="card" >
  //           <div className="card-body">
  //             <div className="d-flex justify-content-between ">
  //               <div className="d-flex flex-row">
  //                 <div className="align-self-center">
                    
  //                 </div>
  //                 <div>
  //                   <h4>budget</h4>
  //                   <p className="mb-0">{category.existingCategorie.nom}</p>
  //                 </div>
  //               </div>
  //               <div>
  //               <i className="fas fa-calendar-alt text-info me-4" style={{ fontSize: '2rem', display: "inline" }}></i>
  //                 <p style={{ display: "inline" }}>date</p>
  //                 <h2 className=" mb-0">18,000</h2>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
    
  //   ))}
  //     </div>
  //   </section>
  // </div>
   );
};

export default Categories;
