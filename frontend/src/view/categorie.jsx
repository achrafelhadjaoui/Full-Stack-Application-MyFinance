import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../repository/categorieService"; // Adjust the import based on your file structure
import AddTransaction from "./addTransaction";

const Categories = () => {
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const navigateToTransaxtion = (e) => {
    e.preventDefault();
    navigate("/transaction");
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
    <section className="d-flex">
      <div className="container align-content-center my-3">
        <section>
          <div className="column">
            {categories.existingCategorie.map((category, index) => (
              <div
                className="col-xl-12 col-md-12 mb-2"
                key={index}
                onClick={() => {
                  localStorage.setItem("category", category._id);
                  navigateToTransaxtion;
                }}
              >
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between ">
                      <div className="d-flex flex-row">
                        <div className="align-self-center"></div>
                        <div>
                          <h4>{category.budget}</h4>
                          <p className="mb-0">{category.nom}</p>
                        </div>
                      </div>
                      <div>
                        <i
                          className="fas fa-calendar-alt text-info me-4"
                          style={{ fontSize: "2rem", display: "inline" }}
                        ></i>
                        <p style={{ display: "inline" }}>date</p>
                        <h2 className=" mb-0">18,000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <AddTransaction />
    </section>
  );
};

export default Categories;
