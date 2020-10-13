import React, { useState } from "react";

import GeneralForm from "./GeneralForm";
import GeneralContent from "./GeneralContent";

const General = () => {
  const [edit, setEdit] = useState(false);
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event, updateFunction, field) => {
    updateFunction({ ...generalInfo, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEdit(false);
  };

  const handleEditClick = () => {
    setEdit(true);
  };

  return (
    <div>
      {edit ? (
        <GeneralForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setGeneralInfo={setGeneralInfo}
          generalInfo={generalInfo}
        />
      ) : (
        <GeneralContent
          generalInfo={generalInfo}
          handleEditClick={handleEditClick}
        />
      )}
    </div>
  );
};

export default General;
