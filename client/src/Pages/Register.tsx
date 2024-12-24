import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

// Define types for the form state and errors
interface FormErrors {
  firstname?: { message: string };
  lastname?: { message: string };
  email?: { message: string };
  password?: { message: string };
  serverMessage?: string;
}

const Register: React.FC = () => {
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});

  // Using the navigate hook from react-router-dom
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Reset any validation messages
    setErrors({});

    // Log the form data
    console.log({ email, password, firstname, lastname });

    // Posting the form data to the API for authentication
    authService.register(
      { email, password, firstname, lastname },
      (error: any) => {
        if (!error) {
          navigate("/"); // Redirect to homepage on successful registration
        } else {
          console.log(error);
          // Handle error responses here
        }
      }
    );
  };

  return (
    <section className="gray" onSubmit={handleSubmit}>
      <div className="container">
        <div className="row align-items-start justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-12">
            <div className="signup-screen-wrap">
              <div className="signup-screen-single light">
                <div className="text-center mb-4">
                  <h4 className="m-0 ft-medium">Create An Account</h4>
                </div>
                <form className="submit-form">
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label className="mb-1">First Name</label>
                        <input
                          type="text"
                          name="firstname"
                          autoFocus
                          onChange={(e) => setFirstName(e.target.value)}
                          className="form-control rounded"
                          placeholder="Amit Kumar"
                        />
                        {errors.firstname && (
                          <div className="alert alert-danger">
                            {errors.firstname.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label className="mb-1">Last Name</label>
                        <input
                          type="text"
                          name="lastname"
                          onChange={(e) => setLastName(e.target.value)}
                          className="form-control rounded"
                          placeholder="Kumar"
                          autoFocus
                        />
                        {errors.lastname && (
                          <div className="alert alert-danger">
                            {errors.lastname.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control rounded"
                      placeholder="kumaramit@gmail.com*"
                    />
                    {errors.email && (
                      <div className="alert alert-danger">
                        {errors.email.message}
                      </div>
                    )}
                    {errors.serverMessage && (
                      <div className="alert alert-danger">
                        {errors.serverMessage}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="mb-1">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control rounded"
                      placeholder="Password*"
                    />
                    {errors.password && (
                      <div className="alert alert-danger">
                        {errors.password.message}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-md full-width bg-sky text-light rounded ft-medium"
                    >
                      Sign Up
                    </button>
                  </div>

                  <div className="form-group text-center mb-0">
                    <p className="extra">Or Signup with</p>
                    <div className="option-log">
                      <div className="single-log-opt">
                        <a href="javascript:void(0);" className="log-btn">
                          <img
                            src="https://via.placeholder.com/200x200"
                            className="img-fluid"
                            alt="Google Login"
                          />
                          Login with Google
                        </a>
                      </div>
                      <div className="single-log-opt">
                        <a href="javascript:void(0);" className="log-btn">
                          <img
                            src="assets/img/facebook.png"
                            className="img-fluid"
                            alt="Facebook Login"
                          />
                          Login with Facebook
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="form-group text-center mt-4 mb-0">
                    <p className="mb-0">
                      Have You Already An account?{" "}
                      <a href="login.html" className="ft-medium text-success">
                        Sign In
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
  );
};

export default Register;
