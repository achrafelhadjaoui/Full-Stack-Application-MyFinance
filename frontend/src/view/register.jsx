import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../repository/authRepository.js'


const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');


  const navigate = useNavigate();

  const navigateToLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const onButtonClick = async (e) => {
    e.preventDefault();
      const response = await register( {
        firstName,
        lastName,
        email,
        password
      });
      localStorage.setItem('token', response.data.token);

      if (response.status === 201) {
        // Handle successful registration
        console.log('Registration successful', response.data);
        // Optionally navigate to login or home page
        navigate('/home');
      }
    };

  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Sign Up</h3>
            
          </div>
          <div className="card-body">
            <form>
            <div className="input-group form-group">
            <input type="text" className="form-control" placeholder="First Name" onChange={(ev) => setfirstName(ev.target.value)} />

                <input type="text" className="form-control" placeholder="Last Name" onChange={(ev) => setlastName(ev.target.value)} />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Email" onChange={(ev) => setEmail(ev.target.value)} />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-key"></i></span>
                </div>
                <input type="password" className="form-control" placeholder="password" onChange={(ev) => setPassword(ev.target.value)} />
              </div>
              <div className="form-group">
                <input type="submit" value="Sign Up" onClick={onButtonClick} className="btn float-right login_btn" />
              </div>
            </form>
          </div>
          <div className="card-footer">
				<div className="d-flex justify-content-center links">
					Have already account?<a className="text-primary" onClick={navigateToLogin}>Sign In</a>
				</div>
			</div>
        </div>
        
      </div>
    </div>
  );
};

export default Register;
