import React from "react";

const EducationForm = ({setDegree, handleChange, handleSubmit}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Degree title:
          <input
            onChange={(event) => handleChange(event, setDegree, "title")}
            required
            type="text"
          ></input>
          School name:
          <input
            onChange={(event) => handleChange(event, setDegree, "name")}
            required
            type="text"
          ></input>
          Date:
          <input
            onChange={(event) => handleChange(event, setDegree, "startDate")}
            required
            type="date"
          ></input>
          <input
            onChange={(event) => handleChange(event, setDegree, "endDate")}
            required
            type="date"
          ></input>
        </label>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

export default EducationForm;
