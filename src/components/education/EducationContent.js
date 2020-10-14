import React from "react";

const EducationContent = ({ degree, deleteDegree, toggleEdit }) => {
  return (
    <div>
      <h1>{degree.title}</h1>
      <p>School name{degree.name}</p>
      <p>
        Date: {degree.startDate.length > 1 ? degree.startDate + " to " : ""}
        {degree.endDate}
      </p>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={deleteDegree}>Delete</button>
    </div>
  );
};

export default EducationContent;
