import React from "react";

const EducationContent = ({ degree, handleEditClick, handleDeleteDegree }) => {
  return (
    <div>
      <h1>{degree.title}</h1>
      <p>School name{degree.name}</p>
      <p>
        Date: {degree.startDate.length > 1 ? degree.startDate + " to" : ""}
        {degree.endDate}
      </p>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteDegree}>Delete</button>
    </div>
  );
};

export default EducationContent;
