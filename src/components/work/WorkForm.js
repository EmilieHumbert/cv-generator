import React from "react";

const WorkForm = ({ job, index, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Position title:
        <input
          onChange={(event) =>
            handleChange(index, "positionTitle", event.target.value)
          }
          required
          type="text"
          value={job.positionTitle}
        ></input>
        Company name:
        <input
          onChange={(event) =>
            handleChange(index, "companyName", event.target.value)
          }
          required
          type="text"
          value={job.companyName}
        ></input>
        Description:
        <input
          onChange={(event) =>
            handleChange(index, "description", event.target.value)
          }
          type="text"
          value={job.description}
        ></input>
        Date:
        <input
          onChange={(event) =>
            handleChange(index, "startDate", event.target.value)
          }
          required
          type="date"
          value={job.startDate}
        ></input>
        <input
          onChange={(event) =>
            handleChange(index, "endDate", event.target.value)
          }
          required
          type="date"
          value={job.endDate}
        ></input>
      </label>
      <input type="submit" value="submit"></input>
    </form>
  );
};

export default WorkForm;
