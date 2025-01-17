import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as businessTypes from '../config/business-types';
import { handleError, FormErrors } from '../common/errorUtils';
import * as DataService from '../services/DataService';

const Create: React.FC = () => {
  const [formState, setFormState] = useState<businessTypes.Player>({
    firstname: '',
    lastname: '',
    position: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const navigate = useNavigate();

  const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});

    DataService.createPlayer(formState, (error) => {
      if (!error) {
        navigate('/');
      } else {
        console.log(error);
        handleError(error, setErrors);
      }
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof businessTypes.Player,
  ) => {
    setFormState({
      ...formState,
      [field]: event.target.value,
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
        value={formState.firstname}
        onChange={(e) => handleChange(e, 'firstname')}
        className="form-control"
        placeholder="First name"
        autoFocus
      />
      {errors.firstname && (
        <div className="alert alert-danger">{errors.serverMessage}</div>
      )}

      <label htmlFor="inputlastname" className="sr-only">
        Last Name
      </label>
      <input
        type="text"
        id="inputlastname"
        name="lastname"
        value={formState.lastname}
        onChange={(e) => handleChange(e, 'lastname')}
        className="form-control"
        placeholder="Last Name"
      />
      {errors.lastname && (
        <div className="alert alert-danger">{errors.serverMessage}</div>
      )}

      <label htmlFor="inputPosition" className="sr-only">
        Position
      </label>
      <input
        type="text"
        id="inputPosition"
        name="position"
        value={formState.position}
        onChange={(e) => handleChange(e, 'position')}
        className="form-control"
        placeholder="Position"
      />
      {errors.position && (
        <div className="alert alert-danger">{errors.serverMessage}</div>
      )}

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Create;
