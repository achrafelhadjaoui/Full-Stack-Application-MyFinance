import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentMonth } from "../repository/monthSrvice"; // Adjust the import based on your file structure
import Categories from "./categorie";

const MonthComponent = () => {
  const [currentMonth, setCurrentMonth] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrentMonth = async () => {
      try {
        const data = await getCurrentMonth();
        setCurrentMonth(data);
      } catch (error) {
        console.error("Error fetching current month:", error);
        setError("Failed to fetch the current month");
      }
    };
    console.log("Fetching current month...");
    fetchCurrentMonth();
  }, []);

  const navigate = useNavigate();
  const navigateToMonth = (e) => {
    e.preventDefault();
    navigate("/month");
  };

  const navigateToAddCategorie = (e) => {
    e.preventDefault();
    navigate("/categorie");
  };

  if (error) {
    return (
      <div className="container">
        <div>{error}</div>
        <button className="btn" onClick={navigateToMonth}>Add Month</button>
      </div>
    );
  }

  if (!currentMonth) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="container d-flex justify-content-between">
      <p>{currentMonth.currentMonth.nom}</p>
      <p>{currentMonth.currentMonth.montant}</p>
      {localStorage.setItem('month', currentMonth.currentMonth._id)}
      <button className="btn" onClick={navigateToAddCategorie}>add categorie</button>
    </div>
    <Categories/>
    </>
  );
};

export default MonthComponent;
