import React, { useState } from "react";

import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";

const EducationForm = ({ degree, index, toggleEdit, updateDegree }) => {
  const [formContent, setFormContent] = useState({ ...degree });

  const handleChange = (field, value) => {
    setFormContent({ ...formContent, [field]: value });
  };

  const handleReset = (event) => {
    event.preventDefault();
    toggleEdit();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateDegree(index, formContent);
    toggleEdit();
  };

  return (
    <form onReset={handleReset} onSubmit={handleSubmit}>
      <div className="p-d-flex p-flex-column">
        <label htmlFor="degreetitle">Degree title:</label>
        <InputText
          id="degreetitle"
          onChange={(event) => handleChange("title", event.target.value)}
          required
          type="text"
          value={formContent.title}
        />
        <label htmlFor="schoolname">School name:</label>
        <InputText
          id="schoolname"
          onChange={(event) => handleChange("name", event.target.value)}
          required
          type="text"
          value={formContent.name}
        />
        <label htmlFor="daterange">Date:</label>
        <Calendar
          id="daterange"
          onChange={(event) => handleChange("date", event.target.value)}
          readOnlyInput
          selectionMode="range"
          value={formContent.date}
        />
        <div className="p-formgroup-inline p-align-center p-justify-center">
          <Button
            className="p-button-rounded p-button-success p-button-outlined"
            icon="pi pi-check"
            type="submit"
          />
          <Button
            className="p-button-rounded p-button-danger p-button-outlined"
            icon="pi pi-times"
            type="reset"
          />
        </div>
      </div>
    </form>
  );
};

export default EducationForm;
