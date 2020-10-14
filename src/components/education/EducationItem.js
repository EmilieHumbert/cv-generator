import React, { useState } from "react";

import EducationForm from "./EducationForm";
import EducationContent from "./EducationContent";

const EducationItem = ({ degree, deleteDegree, updateDegree, index }) => {
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return edit ? (
    <EducationForm
      degree={degree}
      toggleEdit={toggleEdit}
      updateDegree={updateDegree}
      index={index}
    />
  ) : (
    <EducationContent
      degree={degree}
      toggleEdit={toggleEdit}
      deleteDegree={() => deleteDegree(index)}
    />
  );
};

export default EducationItem;
