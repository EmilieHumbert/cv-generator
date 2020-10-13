import React, { useState } from "react";

const WorkInfo = () => {
  const [edit, setEdit] = useState(false);
  const [job, setJob] = useState({
    companyName: "",
    positionTitle: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (event, updateFunction, field) => {
    updateFunction({ ...job, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (job.endDate < job.startDate) {
      alert("Please pick an end date after the start date");
      setEdit(true);
      return;
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
              Position title:
              <input
                onChange={(event) =>
                  handleChange(event, setJob, "positionTitle")
                }
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
        </div>
      ) : (
        <div>
          <h1>{job.positionTitle}</h1>
          <p>Company name: {job.companyName}</p>
          <p>Description: {job.description}</p>
          <p>
            Date: {job.startDate.length > 1 ? job.startDate + " to" : ""}{" "}
            {job.endDate}
          </p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default WorkInfo;
