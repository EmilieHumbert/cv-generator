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
      <h1 className="p-col-6 p-offset-3" style={{ marginBottom: "0" }}>
        Profile
      </h1>
      <Card
        style={{ padding: "0 1rem", marginBottom: "10px" }}
        className="p-col-6 p-offset-3 p-shadow-5"
      >
        {edit ? (
          <GeneralForm
            setGeneralInfo={setGeneralInfo}
            generalInfo={generalInfo}
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
