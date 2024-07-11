import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './view/login';
import Home from './view/home';
import Register from './view/register';
import User from './view/user';
// import Sidebar from './sideBar';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div className="App">
      {/* <Sidebar /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
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
            element={<User />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
