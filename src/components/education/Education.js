import React, { useState } from "react";

import EducationItem from "./EducationItem";

const createDegree = () => ({
  name: "",
  title: "",
  startDate: "",
  endDate: "",
});

const Education = () => {
  const [degrees, setDegrees] = useState([createDegree()]);

  const handleUpdateDegree = (index, updatedDegree) => {
    setDegrees(
      degrees.map((degree, degreeIndex) => {
        return degreeIndex === index ? updatedDegree : degree;
      })
    );
  };

  const handleAddDegree = () => {
    setDegrees([...degrees, createDegree()]);
  };

  const handleDeleteDegree = (index) => {
    const updatedDegrees = degrees.filter((degree, degreeIndex) => {
      return index !== degreeIndex;
    });
    setDegrees(updatedDegrees);
  };

  return (
    <div>
      {degrees.map((degree, index) => (
        <EducationItem
          degree={degree}
          handleDeleteDegree={handleDeleteDegree}
          handleUpdateDegree={handleUpdateDegree}
          index={index}
        />
      ))}
      <button onClick={handleAddDegree}>Add a degree</button>
    </div>
  );
};

export default Education;
