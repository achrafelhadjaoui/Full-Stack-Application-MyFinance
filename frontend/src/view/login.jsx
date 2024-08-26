import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../repository/authRepository.js";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const navigateToRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const onButtonClick = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      // Assuming the response contains a token
      localStorage.setItem("token", response.data.token);
      navigate("/home"); // Adjust the path as needed
    } catch (error) {
      setError(
        error.response?.data?.error || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Sign In</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(ev) => setPassword(ev.target.value)}
                />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  onClick={onButtonClick}
                  className="btn float-right login_btn"
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?
              <a className="text-primary" onClick={navigateToRegister}>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
