import React from "react";

const GeneralForm = ({handleChange, handleSubmit, setGeneralInfo, generalInfo}) => {
  return (
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
  );
};

export default GeneralForm;
