import React from "react";

import { Button } from "primereact/button";

const GeneralContent = ({ generalInfo, toggleEdit }) => {
  return (
    <div>
      <div className="p-d-flex p-flex-column">
        <h1 className="p-col-align-center">
          {generalInfo.name}
        </h1>
        <p className="p-col-align-center">{generalInfo.email}</p>
        <p className="p-col-align-center">{generalInfo.phone}</p>
      </div>
      <div className="p-d-flex p-jc-center">
        <Button
          className="p-button-rounded p-button-outlined"
          onClick={toggleEdit}
          icon="pi pi-pencil"
          label="Edit or add information about you"
        />
      </div>
    </div>
  );
};

export default GeneralContent;
