import React, { useState } from "react";

import EducationForm from "./EducationForm";
import EducationContent from "./EducationContent";

const EducationItem = ({
  degree,
  deleteDegree,
  hasBottomBorder,
  index,
  updateDegree,
}) => {
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div
      className={hasBottomBorder ? "p-mb-5 p-pb-5" : ""}
      style={hasBottomBorder ? { borderBottom: "1px solid lightgrey" } : {}}
    >
      {edit ? (
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
      )}
    </div>
  );
};

export default EducationItem;
