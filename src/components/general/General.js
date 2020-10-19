import React, { useState } from "react";

import { Card } from "primereact/card";

import GeneralForm from "./GeneralForm";
import GeneralContent from "./GeneralContent";

const General = () => {
  const [edit, setEdit] = useState(false);
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="p-grid">
      <div className="p-col-6 p-offset-3 p-px-5 p-d-flex">
        <h1 className="p-mb-0">Profile</h1>
      </div>
      <Card className="p-col-6 p-offset-3 p-shadow-5 p-py-0 p-px-3 p-mb-2">
        {edit ? (
          <GeneralForm
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
            toggleEdit={toggleEdit}
          />
        ) : (
          <GeneralContent generalInfo={generalInfo} toggleEdit={toggleEdit} />
        )}
      </Card>
    </div>
  );
};

export default General;
