import React from "react";

import { Button } from "primereact/button";

const WorkContent = ({ deleteJob, job, toggleEdit }) => {
  return (
    <>
      <div className="p-d-flex p-jc-between p-ai-start">
        <h1 className="p-my-0">
          {job.positionTitle || (
            <span className="p-pl-0" style={{ color: "lightgrey" }}>
              Add your work experience
            </span>
          )}
        </h1>
        <div style={{ flexShrink: 0 }}>
          <Button
            className="p-button-rounded p-button-outlined"
            icon="pi pi-pencil"
            onClick={toggleEdit}
          />
          <Button
            className="p-button-rounded p-button-danger p-button-outlined"
            icon="pi pi-trash"
            onClick={deleteJob}
          />
        </div>
      </div>
      <div className="p-d-flex p-flex-column">
        <p className="p-my-0 p-text-bold">{job.companyName}</p>
        <p className="p-my-0">
          {Array.isArray(job.date) &&
            job.date[0].toDateString() + " - " + job.date[1].toDateString()}
        </p>
        <p className="p-mb-0">{job.description}</p>
      </div>
    </>
  );
};

export default WorkContent;
