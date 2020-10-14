import React, { useState } from "react";

const EducationForm = ({ degree, toggleEdit, updateDegree, index }) => {
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
    <div>
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <label>
          Degree title:
          <input
            onChange={(event) => handleChange("title", event.target.value)}
            required
            type="text"
            value={formContent.title}
          ></input>
          School name:
          <input
            onChange={(event) => handleChange("name", event.target.value)}
            required
            type="text"
            value={formContent.name}
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
            type="date"
            value={formContent.endDate}
          ></input>
        </label>
        <input type="submit" value="submit"></input>
        <input type="reset" value="cancel"></input>
      </form>
    </div>
  );
};

export default EducationForm;
