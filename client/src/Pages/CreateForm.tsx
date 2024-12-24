import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataService from "../services/dataService";

// Define the structure for the form state
interface FormState {
  firstname: string;
  lastname: string;
  position: string;
}

// Define the structure of the error messages
interface Errors {
  firstname?: { message: string };
  lastname?: { message: string };
  position?: { message: string };
}

export const CreateForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    firstname: "",
    lastname: "",
    position: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();

  // Handle input change for each form field
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof FormState
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  // Handle form submission
  const handleCreate = (event: React.FormEvent) => {
    event.preventDefault();
    setErrors({}); // Reset previous errors

    dataService.createPlayer(formData, (error: any) => {
      if (!error) {
        navigate("/"); // Redirect to homepage if no error
      } else {
        console.log(error);
        setErrors(error?.data?.errors || {}); // Set errors if there is any
      }
    });
  };

  return (
    <form className="form-signin" onSubmit={handleCreate}>
      <label htmlFor="inputFirstName" className="sr-only">
        First Name
      </label>
      <input
        type="text"
        id="inputFirstName"
        name="firstname"
        value={formData.firstname}
        onChange={(e) => handleInputChange(e, "firstname")}
        className="form-control"
        placeholder="First Name"
        autoFocus
      />
      {errors.firstname && (
        <div className="alert alert-danger">{errors.firstname.message}</div>
      )}

      <label htmlFor="inputLastName" className="sr-only">
        Last Name
      </label>
      <input
        type="text"
        id="inputLastName"
        name="lastname"
        value={formData.lastname}
        onChange={(e) => handleInputChange(e, "lastname")}
        className="form-control"
        placeholder="Last Name"
      />
      {errors.lastname && (
        <div className="alert alert-danger">{errors.lastname.message}</div>
      )}

      <label htmlFor="inputPosition" className="sr-only">
        Position
      </label>
      <input
        type="text"
        id="inputPosition"
        name="position"
        value={formData.position}
        onChange={(e) => handleInputChange(e, "position")}
        className="form-control"
        placeholder="Position"
      />
      {errors.position && (
        <div className="alert alert-danger">{errors.position.message}</div>
      )}

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CreateForm;
