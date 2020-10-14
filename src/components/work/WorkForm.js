import React, { useState } from "react";

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
      <label>
        Position title:
        <input
          onChange={(event) =>
            handleChange("positionTitle", event.target.value)
          }
          required
          type="text"
          value={formContent.positionTitle}
        ></input>
        Company name:
        <input
          onChange={(event) => handleChange("companyName", event.target.value)}
          required
          type="text"
          value={formContent.companyName}
        ></input>
        Description:
        <input
          onChange={(event) => handleChange("description", event.target.value)}
          type="text"
          value={formContent.description}
        ></input>
        Date:
        <input
          onChange={(event) => handleChange("startDate", event.target.value)}
          required
          type="date"
          value={formContent.startDate}
        ></input>
        <input
          onChange={(event) => handleChange("endDate", event.target.value)}
          required
          type="date"
          value={formContent.endDate}
        ></input>
      </label>
      <input type="submit" value="submit"></input>
      <input type="reset" value="cancel"></input>
    </form>
  );
};

export default WorkForm;
