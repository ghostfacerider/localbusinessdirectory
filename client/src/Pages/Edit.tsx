import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dataService from "../services/dataService";

// Define types for the form state
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

// Define the player data type (assuming it contains these fields)
interface Player {
  firstname: string;
  lastname: string;
  position: string;
}

const Edit: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    firstname: "",
    lastname: "",
    position: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const params = useParams<{ id: string }>(); // Ensure the id is properly typed
  const navigate = useNavigate();

  // Fetch the player data when the component mounts or params.id changes
  useEffect(() => {
    if (params.id) {
      dataService.getOnePlayer(params.id, (player: Player) => {
        setFormData({
          firstname: player.firstname,
          lastname: player.lastname,
          position: player.position,
        });
      });
    }
  }, [params.id]);

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setErrors({}); // Reset previous errors

    dataService.updatePlayer(params.id, formData, (error: any) => {
      if (!error) {
        navigate("/"); // Navigate to the home page after successful update
      } else {
        console.log(error);
        setErrors(error?.data?.errors || {}); // Set errors if there are any
      }
    });
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal text-center">Edit Players</h1>

      <label htmlFor="inputFirstName" className="sr-only">
        First Name
      </label>
      <input
        type="text"
        id="inputFirstName"
        name="firstname"
        value={formData.firstname}
        onChange={(e) =>
          setFormData({ ...formData, firstname: e.target.value })
        }
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
        onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
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
        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
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

export default Edit;
