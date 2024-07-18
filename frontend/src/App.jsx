import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Login from './view/login';
import Home from './view/home';
import Register from './view/register';
import User from './view/user';
import Navbar from './view/navBar';
import PrivateRoute from './view/PrivateRoute';
import Transaction from './view/transaction';
import Dashboard from './view/dashboard';


import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <InnerApp 
          loggedIn={loggedIn} 
          setLoggedIn={setLoggedIn} 
          email={email} 
          setEmail={setEmail} 
        />
      </BrowserRouter>
    </div>
  );
}

function InnerApp({ loggedIn, setLoggedIn, email, setEmail }) {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/register'];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={<PrivateRoute element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>}
        />
        <Route
          path="/login"
          element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/user"
          element={<PrivateRoute element={<User />}/>}
        />
        <Route
          path="/transaction"
          element={<PrivateRoute element={<Transaction />}/>}
        />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />}/>}
        />
      </Routes>
    </>
  );
}

export default App;
