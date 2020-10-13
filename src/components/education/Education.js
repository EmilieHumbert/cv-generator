import React, { useState } from "react";

import EducationForm from "./EducationForm";
import EducationContent from "./EducationContent";

const Education = () => {
  const [edit, setEdit] = useState(false);
  const [degree, setDegree] = useState({
    name: "",
    title: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (event, updateFunction, field) => {
    updateFunction({ ...degree, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (degree.endDate < degree.startDate) {
      alert("Please pick an end date after the start date");
      setEdit(true);
      return;
    }
    setEdit(false);
  };

  const handleEditClick = () => {
    setEdit(true);
  };

  return (
    <div>
      {edit ? (
        <EducationForm
          setDegree={setDegree}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <EducationContent degree={degree} handleEditClick={handleEditClick} />
      )}
    </div>
  );
};

export default Education;
