import React from "react";

import { Button } from "primereact/button";

const EducationContent = ({ degree, deleteDegree, toggleEdit }) => {
  return (
    <div>
      <div className="p-d-flex p-jc-between p-ai-center">
        <h1 style={{ margin: "0" }}>
          {degree.title || (
            <span style={{ color: "lightgrey" }}>
              Add your education history
            </span>
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
            onClick={deleteDegree}
          />
        </div>
      </div>
      <div className="p-d-flex p-flex-column">
        <p className="p-col-align-left">
          {degree.name && `School name: ${degree.name}`}
        </p>
        <p className="p-col-align-left">
          {Array.isArray(degree.date) &&
            degree.date[0].toDateString() +
              " - " +
              degree.date[1].toDateString()}
        </p>
        <p>{degree.description}</p>
      </div>
    </div>
  );
};

export default EducationContent;
