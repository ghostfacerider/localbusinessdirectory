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
        {/* <!-- Log In Modal --> */}
        <div
          className="modal fade"
          id="login"
          tabindex="-1"
          role="dialog"
          aria-labelledby="loginmodal"
          aria-hidden="true"
        >
          <div className="modal-dialog login-pop-form" role="document">
            <div className="modal-content" id="loginmodal">
              <div className="modal-headers">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span className="ti-close"></span>
                </button>
              </div>

              <div className="modal-body p-5">
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
                      className="form-control rounded bg-light"
                      placeholder="Email*"
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
                      className="form-control rounded bg-light"
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
                          checked
                        />
                        <label for="dd" className="checkbox-custom-label">
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
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal */}
      </section>
    </>
  );
};

export default SignIn;
