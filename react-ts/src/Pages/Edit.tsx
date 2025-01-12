import React, { useState, useEffect, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { handleError, FormErrors } from '../common/errorUtils';
import * as DataService from '../services/DataService';


const Edit: React.FC = () => {
  const [firstname, setFirstName] = useState<string>('');
  const [lastname, setLastName] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});

  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      DataService.getOnePlayer(params.id, (player, error) => {
        if (error) {
          console.error('Error fetching player:', error);
          setErrors((prevErrors) => ({
            ...prevErrors,
            fetch: 'Failed to fetch player data',
          }));
        } else if (player) {
          setFirstName(player.firstname);
          setLastName(player.lastname);
          setPosition(player.position);
        }
      });
    }
  }, [params.id]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});
    if (params.id) {
      DataService.updatePlayer(params.id, { firstname, lastname, position }, (error) => {
        if (!error) {
          navigate('/');
        } else {
          console.error(error);
          handleError(error, setErrors);
        }
      }
      );
    }
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
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
        className="form-control"
        autoFocus
      />
      {errors.firstname && (
        <div className="alert alert-danger"> {errors.serverMessage}</div>
      )}

      <label htmlFor="inputlastname" className="sr-only">
        Last Name
      </label>
      <input
        type="text"
        id="inputlastname"
        name="lastname"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
        className="form-control"
        placeholder="Last Name"
      />
      {errors.lastname && (
        <div className="alert alert-danger"> {errors.serverMessage}</div>
      )}

      <label htmlFor="inputPostion" className="sr-only">
        Position
      </label>
      <input
        type="text"
        id="inputPostion"
        name="position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="form-control"
        placeholder="Position"
      />
      {errors.position && (
        <div className="alert alert-danger"> {errors.serverMessage}</div>
      )}

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Edit;
