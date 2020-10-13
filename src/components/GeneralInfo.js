import React, { useState } from "react";

const GeneralInfo = () => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(Number);

  const handleChange = (event, updateFunction) => {
    updateFunction(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(name);
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
              onChange={(event) => handleChange(event, setName)}
              required
              type="text"
              value={name}
            />
            Email:
            <input
              onChange={(event) => handleChange(event, setEmail)}
              type="email"
            />
            Phone number:
            <input
              onChange={(event) => handleChange(event, setPhone)}
              type="number"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <div>
          <h1>{name || "Full name"}</h1>
          <p>{email || "Email"}</p>
          <p>{phone || "Phone number"}</p>
          <button onClick={handleEditClick}>EDIT</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
