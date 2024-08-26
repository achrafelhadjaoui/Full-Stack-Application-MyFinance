import React from "react";
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();

  const navigateToTransaction = (e) => {
    e.preventDefault();
    navigate('/transaction');
  };

  const navigateToAcuille = (e) => {
    e.preventDefault();
    navigate('/acuille');
  }
 
  const navigateToDashboard = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };
  const navigateToProfile = (e) => {
    e.preventDefault();
    navigate('/user');
  };
  const navigateToLogin = (e) => {
    e.preventDefault();
    navigate('/login');
    localStorage.setItem('token', '');
  };
  return (
<nav className="navbar navbar-light bg-light justify-content-between">
  <a className="navbar-brand">My Finance</a>
  <form className="form-inline">
    <a className="nav-item nav-link" onClick={navigateToAcuille}>Accueil</a>
    <a className="nav-item nav-link" onClick={navigateToTransaction}>Transaction</a>
    <a className="nav-item nav-link" onClick={navigateToDashboard}>Dashboard</a>
    <a className="nav-item nav-link" onClick={navigateToProfile}>Profile</a>
    <a className="nav-item nav-link" onClick={navigateToLogin}>Logout</a>
  </form>
</nav>
  );
}

export default Navbar;
