import React, { useState } from "react";

const EducationInfo = () => {
  const [edit, setEdit] = useState(false);
  const [degree, setDegree] = useState({
    name: "",
    title: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (event, updateFunction, field) => {

    updateFunction({ ...degree, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (degree.endDate < degree.startDate) {
      alert("Please pick an end date after the start date");
      setEdit(true);
      return
    }
    setEdit(false);
  };

  const handleEditClick = () => {
    setEdit(true);
  };

  return (
    <div>
      {edit ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              School name:
              <input
                onChange={(event) => handleChange(event, setDegree, "name")}
                required
                type="text"
              ></input>
              Degree title:
              <input
                onChange={(event) => handleChange(event, setDegree, "title")}
                required
                type="text"
              ></input>
              Start date:
              <input
                onChange={(event) =>
                  handleChange(event, setDegree, "startDate")
                }
                pattern="\d{2}-\d{2}-\d{4}"
                required
                type="date"
              ></input>
              End Date:
              <input
                onChange={(event) => handleChange(event, setDegree, "endDate")}
                pattern="\d{2}-\d{2}-\d{4}"
                required
                type="date"
              ></input>
            </label>
            <input type="submit" value="submit"></input>
          </form>
        </div>
      ) : (
        <div>
          <h1>{degree.name || "School name"} </h1>
          <p>{degree.title || "Degree title"}</p>
          <p>
            {degree.startDate || "Start date"} - {degree.endDate || "End date"}
          </p>

          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationInfo;
