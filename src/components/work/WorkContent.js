import React from "react";

import { Button } from "primereact/button";

const WorkContent = ({ deleteJob, job, toggleEdit }) => {
  return (
    <div>
      <div className="p-d-flex p-flex-column">
        <h1 className="p-col-align-center">
          {job.position}
        </h1>
        <p className="p-col-align-center">
          {job.companyName && `Company name: ${job.companyName}`}
        </p>
        <p className="p-col-align-center">
          {job.description && `Description: ${job.description}`}
        </p>
        <p className="p-col-align-center">
          {job.startDate && `Date:`}{" "}
          {job.startDate.length > 1 ? job.startDate + " to " : ""}
          {job.endDate}
        </p>
      </div>
      <div className="p-d-flex p-jc-center">
        <Button
          className="p-button-rounded p-button-outlined"
          icon="pi pi-pencil"
          label="Edit or add work experience"
          onClick={toggleEdit}
        />
        <Button
          className="p-button-rounded p-button-danger p-button-outlined"
          icon="pi pi-trash"
          onClick={deleteJob}
        />
      </div>
    </div>
  );
};

export default WorkContent;
