import React, { useState } from "react";

const GeneralInfo = () => {
  const [edit, setEdit] = useState(false);
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event, updateFunction, field) => {
    updateFunction({ ...generalInfo, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEdit(false);
  };

  const handleEditClick = () => {
    setEdit(true);
  };

  return (
    <div>
      {edit ? (
        <form onSubmit={handleSubmit}>
          <label>
            Full name:
            <input
              onChange={(event) => handleChange(event, setGeneralInfo, "name")}
              required
              type="text"
              value={generalInfo.name}
            />
            Email:
            <input
              onChange={(event) => handleChange(event, setGeneralInfo, "email")}
              type="email"
              value={generalInfo.email}
            />
            Phone number:
            <input
              onChange={(event) => handleChange(event, setGeneralInfo, "phone")}
              type="tel"
              value={generalInfo.phone}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <div>
          <h1>{generalInfo.name}</h1>
          <p>Email: {generalInfo.email}</p>
          <p>Phone number: {generalInfo.phone}</p>
          <button onClick={handleEditClick}>EDIT</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
