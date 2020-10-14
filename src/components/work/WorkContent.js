import React from "react";

const WorkContent = ({ job, toggleEdit, deleteJob }) => {
  return (
    <div>
      <h1>{job.positionTitle}</h1>
      <p>Company name: {job.companyName}</p>
      <p>Description: {job.description}</p>
      <p>
        Date: {job.startDate.length > 1 ? job.startDate + " to " : ""}
        {job.endDate}
      </p>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={deleteJob}>Delete job</button>
    </div>
  );
};

export default WorkContent;
