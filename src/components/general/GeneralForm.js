import React, { useState } from "react";

const GeneralForm = ({ setGeneralInfo, generalInfo, toggleEdit }) => {
  const [formContent, setFormContent] = useState({ ...generalInfo });

  const handleChange = (field, value) => {
    setFormContent({ ...formContent, [field]: value });
  };

  const handleReset = (event) => {
    event.preventDefault();
    toggleEdit();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGeneralInfo(formContent);
    toggleEdit();
  };

  return (
    <form onReset={handleReset} onSubmit={handleSubmit}>
      <label>
        Full name:
        <input
          onChange={(event) => handleChange("name", event.target.value)}
          required
          type="text"
          value={formContent.name}
        />
        Email:
        <input
          onChange={(event) => handleChange("email", event.target.value)}
          type="email"
          value={formContent.email}
        />
        Phone number:
        <input
          onChange={(event) => handleChange("phone", event.target.value)}
          type="tel"
          value={formContent.phone}
        />
      </label>
      <input type="submit" value="Submit" />
      <input type="reset" value="Cancel" />
    </form>
  );
};

export default GeneralForm;
