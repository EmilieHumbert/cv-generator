import React, { useState } from "react";

import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

const WorkForm = ({ index, job, toggleEdit, updateJob }) => {
  const [formContent, setFormContent] = useState({ ...job });

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
    updateJob(index, formContent);
    toggleEdit();
  };

  return (
    <form onReset={handleReset} onSubmit={handleSubmit}>
      <div className="p-d-flex p-flex-column">
        <label htmlFor="positionTitle">Position title:</label>
        <InputText
          id="positionTitle"
          onChange={(event) =>
            handleChange("positionTitle", event.target.value)
          }
          required
          type="text"
          value={formContent.positionTitle}
        />
        <label htmlFor="companyName">Company name:</label>
        <InputText
          id="companyName"
          onChange={(event) => handleChange("companyName", event.target.value)}
          required
          type="text"
          value={formContent.companyName}
        />

        <label htmlFor="daterange">Date</label>
        <Calendar
          id="daterange"
          onChange={(event) => handleChange("date", event.target.value)}
          readOnlyInput
          selectionMode="range"
          value={formContent.date}
        />
        <label htmlFor="description">Description:</label>
        <InputTextarea
          id="description"
          onChange={(event) => handleChange("description", event.target.value)}
          type="text"
          value={formContent.description}
        />
        <div
          className="p-formgroup-inline p-align-center p-justify-center"
          style={{ marginTop: "10px" }}
        >
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

export default WorkForm;
