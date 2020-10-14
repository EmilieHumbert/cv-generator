import React, { useState } from "react";

import EducationForm from "./EducationForm";
import EducationContent from "./EducationContent";

const EducationItem = ({ degree, handleDeleteDegree, handleUpdateDegree, index }) => {
  const [edit, setEdit] = useState(false);

  const handleEditClick = () => {
    setEdit(!edit);
  };

  return edit ? (
    <EducationForm
      degree={degree}
      handleEditClick={handleEditClick}
      handleUpdateDegree={handleUpdateDegree}
      index={index}
    />
  ) : (
    <EducationContent
      degree={degree}
      handleEditClick={handleEditClick}
      handleDeleteDegree={() => handleDeleteDegree(index)}
    />
  );
};

export default EducationItem;
