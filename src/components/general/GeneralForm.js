import React, { useState } from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const GeneralForm = ({ generalInfo, setGeneralInfo, toggleEdit }) => {
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
      <div className="p-d-flex p-flex-column">
        <label htmlFor="fullname">Full name:</label>
        <InputText
          id="fullname"
          onChange={(event) => handleChange("name", event.target.value)}
          type="text"
          value={formContent.name}
        />
        <label htmlFor="email">Email:</label>
        <InputText
          id="email"
          onChange={(event) => handleChange("email", event.target.value)}
          type="email"
          value={formContent.email}
        />
        <label htmlFor="phonenumber">Phone number:</label>
        <InputText
          id="phonenumber"
          onChange={(event) => handleChange("phone", event.target.value)}
          type="tel"
          value={formContent.phone}
        />
      </div>
      <div className="p-formgroup-inline p-align-center p-justify-center p-mt-2">
        <Button
          className="p-button-rounded p-button-success p-button-outlined"
          icon="pi pi-check"
          type="submit"
        />
        <Button
          className="p-button-rounded p-button-danger p-button-outlined"
          icon="pi pi-times"
          type="button reset"
        />
      </div>
    </form>
  );
};

export default GeneralForm;
