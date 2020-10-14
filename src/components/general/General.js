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

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div>
      {edit ? (
        <GeneralForm
          setGeneralInfo={setGeneralInfo}
          generalInfo={generalInfo}
          toggleEdit={toggleEdit}
        />
      ) : (
        <GeneralContent
          generalInfo={generalInfo}
          toggleEdit={toggleEdit}
        />
      )}
    </div>
  );
};

export default General;
