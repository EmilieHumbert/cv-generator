import React from "react";

import { Button } from "primereact/button";

const GeneralContent = ({ generalInfo, toggleEdit }) => {
  return (
    <div>
      <div className="p-d-flex p-jc-between p-ai-center">
        <h1 className="p-m-0">
          {generalInfo.name || (
            <span style={{ color: "lightgrey" }}>Add your profile details</span>
          )}
        </h1>
        <div>
          <Button
            className="p-button-rounded p-button-outlined"
            icon="pi pi-pencil"
            onClick={toggleEdit}
          />
        </div>
      </div>
      <div className="p-d-flex p-flex-column">
        <p>{generalInfo.email}</p>
        <p className="p-m-0">{generalInfo.phone}</p>
      </div>
    </div>
  );
};

export default GeneralContent;
