import React from "react";

import { Button } from "primereact/button";

const EducationContent = ({ degree, deleteDegree, toggleEdit }) => {
  return (
    <div>
      <div className="p-d-flex p-flex-column">
        <h1 className="p-col-align-center">
          {degree.title}
        </h1>
        <p className="p-col-align-center">
          {degree.name && `School name: ${degree.name}`}
        </p>
        <p className="p-col-align-center">
          {degree.startDate && `Date`}
          {degree.startDate.length > 1 ? degree.startDate + " to " : ""}
          {degree.endDate}
        </p>
      </div>
      <div className="p-d-flex p-jc-center">
        <Button
          className="p-button-rounded p-button-outlined"
          icon="pi pi-pencil"
          label="Edit or add education experience"
          onClick={toggleEdit}
        />
        <Button
          className="p-button-rounded p-button-danger p-button-outlined"
          icon="pi pi-trash"
          onClick={deleteDegree}
        />
      </div>
    </div>
  );
};

export default EducationContent;
