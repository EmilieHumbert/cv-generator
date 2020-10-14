import React, { useState } from "react";

import EducationForm from "./EducationForm";
import EducationContent from "./EducationContent";

const EducationItem = ({ degree, deleteDegree, index, updateDegree }) => {
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return edit ? (
    <EducationForm
      degree={degree}
      index={index}
      toggleEdit={toggleEdit}
      updateDegree={updateDegree}
    />
  ) : (
    <EducationContent
      degree={degree}
      deleteDegree={() => deleteDegree(index)}
      toggleEdit={toggleEdit}
    />
  );
};

export default EducationItem;
