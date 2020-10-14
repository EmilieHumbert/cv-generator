import React from "react";

const EducationForm = ({ degree, index, handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Degree title:
          <input
            onChange={(event) =>
              handleChange(index, "title", event.target.value)
            }
            required
            type="text"
            value={degree.title}
          ></input>
          School name:
          <input
            onChange={(event) =>
              handleChange(index, "name", event.target.value)
            }
            required
            type="text"
            value={degree.name}
          ></input>
          Date:
          <input
            onChange={(event) =>
              handleChange(index, "startDate", event.target.value)
            }
            required
            type="date"
            value={degree.startDate}
          ></input>
          <input
            onChange={(event) =>
              handleChange(index, "endDate", event.target.value)
            }
            required
            type="date"
            value={degree.endDate}
          ></input>
        </label>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

export default EducationForm;
