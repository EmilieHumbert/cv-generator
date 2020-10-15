import React, { useState } from "react";

import { Button } from "primereact/button";
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
    if (formContent.endDate && formContent.startDate > formContent.endDate) {
      return alert(
        "Please enter an end date later than or equal to the start date"
      );
    }
    updateDegree(index, formContent);
    toggleEdit();
  };

  return (
    <form onReset={handleReset} onSubmit={handleSubmit}>
      <div className="p-d-flex p-flex-column">
        <div className="p-col-align-center">
          <label htmlFor="degreetitle">Degree title:</label>
          <InputText
            aria-describedby="degreetitle"
            className="p-d-block"
            id="degreetitle"
            onChange={(event) => handleChange("title", event.target.value)}
            required
            type="text"
            value={formContent.title}
          />
        </div>
        <div className="p-col-align-center">
          <label htmlFor="schoolname">School name:</label>
          <InputText
            aria-describedby="schoolname"
            className="p-d-block"
            id="schoolname"
            onChange={(event) => handleChange("name", event.target.value)}
            required
            type="text"
            value={formContent.name}
          />
        </div>
        <div className="p-col-align-center">
          <label htmlFor="startdate">Date:</label>
          <InputText
            aria-describedby="startdate"
            className="p-d-block"
            id="startdate"
            onChange={(event) => handleChange("startDate", event.target.value)}
            required
            type="date"
            value={formContent.startDate}
          />
        </div>
        <div className="p-col-align-center">
          <label htmlFor="enddate" />
          <InputText
            aria-describedby="enddate"
            className="p-d-block"
            id="enddate"
            onChange={(event) => handleChange("endDate", event.target.value)}
            type="date"
            value={formContent.endDate}
          />
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
            type="reset"
          />
        </div>
      </div>
    </form>
  );
};

export default EducationForm;
