import React, { useState } from "react";
import "../css/signin.css";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

const SignIn = (props) => {
  //define state in this component using Hooks! yay

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  //use the provided by react route
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    //reset any validation messages
    console.log({ email, password });
    setErrors({});

    //we will post the form data to the API for Autherntication
    authService.signin({ email, password }, (error) => {
      if (!error) {
        navigate("/");
      } else {
        console.log(error);
        //save our validation errors in state
        if (error.status === 422) {
          //store any validation in state
          setErrors(error.data.errors);
        } else if (error.status === 401) {
          setErrors(error.data);
        }
      }
    });
  };

  return (
    <>
      <section className="gray" onSubmit={handleSubmit}>
        <div className="container">
          <div className="row align-items-start justify-content-center">
            <div className="col-xl-5 col-lg-8 col-md-12">
              <div className="signup-screen-wrap">
                <div className="signup-screen-single">
                  <div className="text-center mb-4">
                    <h4 className="m-0 ft-medium">Login Your Account</h4>
                  </div>

                  <form className="submit-form">
                    <div className="form-group">
                      <label className="mb-1">Email</label>
                      <input
                        type="text"
                        id="inputEmail"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control rounded"
                        placeholder="Email*"
                        autoFocus
                      />
                      {errors.email && (
                        <div className="alert alert-danger">
                          {" "}
                          {errors.email.message}
                        </div>
                      )}

                      {errors.serverMessage && (
                        <div className="alert alert-danger">
                          {" "}
                          {errors.serverMessage}
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="mb-1">Password</label>
                      <input
                        type="password"
                        id="inputPassword"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control rounded"
                        placeholder="Password*"
                      />
                      {errors.password && (
                        <div className="alert alert-danger">
                          {" "}
                          {errors.password.message}{" "}
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="flex-1">
                          <input
                            id="dd"
                            className="checkbox-custom"
                            name="dd"
                            type="checkbox"
                            defaultChecked
                          />
                          <label htmlFor="dd" className="checkbox-custom-label">
                            Remember Me
                          </label>
                        </div>
                        <div className="eltio_k2">
                          <a href="#" className="theme-cl">
                            Lost Your Password?
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-md full-width theme-bg text-light rounded ft-medium"
                      >
                        Sign In
                      </button>
                    </div>

                    <div className="form-group text-center mb-0">
                      <p className="extra">Or login with</p>
                      <div className="option-log">
                        <div className="single-log-opt">
                          <a href="javascript:void(0);" className="log-btn">
                            <img
                              src="https://via.placeholder.com/200x200"
                              className="img-fluid"
                              alt=""
                            />
                            Login with Google
                          </a>
                        </div>
                        <div className="single-log-opt">
                          <a href="javascript:void(0);" className="log-btn">
                            <img
                              src="assets/img/facebook.png"
                              className="img-fluid"
                              alt=""
                            />
                            Login with Facebook
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="form-group text-center mt-4 mb-0">
                      <p className="mb-0">
                        You Don't have any account?{" "}
                        <a
                          href="signup.html"
                          className="ft-medium text-success"
                        >
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
