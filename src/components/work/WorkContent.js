import React from "react";

import { Button } from "primereact/button";

const WorkContent = ({ deleteJob, job, toggleEdit }) => {
  return (
    <div>
      <div className="p-d-flex p-jc-between p-ai-center">
        <h1 style={{ margin: "0" }}>
          {job.positionTitle || (
            <span style={{ color: "lightgrey" }}>Add your work experience</span>
          )}
        </h1>
        <div>
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
        <p className="p-col-align-left">
          {job.companyName && `Company name: ${job.companyName}`}
        </p>
        <p className="p-col-align-left">
          {job.description && `Description: ${job.description}`}
        </p>
        <p className="p-col-align-left">
          {job.startDate && `Date:`}{" "}
          {job.startDate.length > 1 ? job.startDate + " to " : ""}
          {job.endDate}
        </p>
      </div>
    </div>
  );
};

export default WorkContent;
