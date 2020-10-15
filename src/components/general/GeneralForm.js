import React, { useState } from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

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
      <div className="p-d-flex p-flex-column">
        <div className="p-col-align-center">
          <label htmlFor="fullname">Full name:</label>
          <InputText
            aria-describedby="fullname"
            className="p-d-block"
            id="fullname"
            onChange={(event) => handleChange("name", event.target.value)}
            type="text"
            value={formContent.name}
          />
        </div>
        <div className="p-col-align-center">
          <label htmlFor="email">Email:</label>
          <InputText
            aria-describedby="email"
            className="p-d-block"
            id="email"
            onChange={(event) => handleChange("email", event.target.value)}
            type="email"
            value={formContent.email}
          />
        </div>
        <div className="p-col-align-center">
          <label htmlFor="phonenumber">Phone number:</label>
          <InputText
            aria-describedby="phonenumber"
            className="p-d-block"
            id="phonenumber"
            onChange={(event) => handleChange("phone", event.target.value)}
            type="tel"
            value={formContent.phone}
          />
        </div>
      </div>
      <div className="p-formgroup-inline p-align-center p-justify-center">
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
