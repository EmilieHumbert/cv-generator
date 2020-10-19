import React from "react";

import { Button } from "primereact/button";

const EducationContent = ({ degree, deleteDegree, toggleEdit }) => {
  return (
    <>
      <div className="p-d-flex p-jc-between p-ai-start">
        <h1 className="p-my-0">
          {degree.title || (
            <span className="p-pl-0" style={{ color: "lightgrey" }}>
              Add your education history
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
            onClick={deleteDegree}
          />
        </div>
      </div>
      <div className="p-d-flex p-flex-column">
        <p className="p-my-0 p-text-bold">{degree.name}</p>
        <p className="p-my-0">
          {Array.isArray(degree.date) &&
            degree.date[0].toDateString() +
              " - " +
              degree.date[1].toDateString()}
        </p>
        <p className="p-mb-0">{degree.description}</p>
      </div>
    </>
  );
};

export default EducationContent;
