import React, { useState } from "react";

import EducationForm from "./EducationForm";
import EducationContent from "./EducationContent";

const Education = () => {
  const [edit, setEdit] = useState(false);
  const [degrees, setDegrees] = useState([
    {
      name: "",
      title: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const handleChange = (index, field, value) => {
    const updatedDegree = { ...degrees[index], [field]: value };
    setDegrees(
      degrees.map((degree, degreeIndex) => {
        return degreeIndex === index ? updatedDegree : degree;
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (degrees.endDate < degrees.startDate) {
      alert("Please pick an end date after the start date");
      setEdit(true);
      return;
    }
    setEdit(false);
  };

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleAddEducation = () => {
    setDegrees([
      ...degrees,
      {
        name: "",
        title: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  return (
    <div>
      {degrees.map((degree, index) => {
        return edit ? (
          <EducationForm
            degree={degree}
            index={index}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        ) : (
          <div>
            <EducationContent
              degree={degree}
              index={index}
              handleEditClick={handleEditClick}
            />
            <button onClick={handleAddEducation}>Add a degree</button>
          </div>
        );
      })}
      {}
    </div>
  );
};

export default Education;
