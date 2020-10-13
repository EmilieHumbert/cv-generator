import React from "react";

const WorkForm = ({ handleSubmit, handleChange, setJob }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Position title:
        <input
          onChange={(event) => handleChange(event, setJob, "positionTitle")}
          required
          type="text"
        ></input>
        Company name:
        <input
          onChange={(event) => handleChange(event, setJob, "companyName")}
          required
          type="text"
        ></input>
        Description:
        <input
          type="text"
          onChange={(event) => handleChange(event, setJob, "description")}
        ></input>
        Date:
        <input
          onChange={(event) => handleChange(event, setJob, "startDate")}
          required
          type="date"
        ></input>
        <input
          onChange={(event) => handleChange(event, setJob, "endDate")}
          required
          type="date"
        ></input>
      </label>
      <input type="submit" value="submit"></input>
    </form>
  );
};

export default WorkForm;
