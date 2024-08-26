import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = isTokenValid(token);

  return isAuthenticated ? element : <Navigate to="/login" />;
};
const parseJwt = (token) => {
  const base64Url = token.split('.')[1]; // Extract the payload part
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Fix base64 padding issues
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

const isTokenValid = (token) => {
  if (!token) return false;
  const decodedToken = parseJwt(token);
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  return decodedToken.exp > currentTime;
};

export default PrivateRoute;