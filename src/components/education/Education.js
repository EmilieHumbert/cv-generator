import React, { useState } from "react";
import { nanoid } from "nanoid";

import { Button } from "primereact/button";

import EducationItem from "./EducationItem";

const createDegree = () => ({
  id: nanoid(),
  name: "",
  title: "",
  startDate: "",
  endDate: "",
});

const Education = () => {
  const [degrees, setDegrees] = useState([createDegree()]);

  const updateDegree = (index, updatedDegree) => {
    setDegrees(
      degrees.map((degree, degreeIndex) => {
        return degreeIndex === index ? updatedDegree : degree;
      })
    );
  };

  const addDegree = () => {
    setDegrees([...degrees, createDegree()]);
  };

  const deleteDegree = (index) => {
    const updatedDegrees = degrees.filter((degree, degreeIndex) => {
      return index !== degreeIndex;
    });
    setDegrees(updatedDegrees);
  };

  return (
    <div>
      {degrees.map((degree, index) => (
        <EducationItem
          key={degree.id}
          degree={degree}
          deleteDegree={deleteDegree}
          index={index}
          updateDegree={updateDegree}
        />
      ))}
      <div className="p-d-flex p-flex-column">
        <div className="p-col-align-center">
          <Button
            className="p-button-rounded p-button-success p-button-outlined"
            icon="pi pi-plus"
            label="Add additional education experience"
            onClick={addDegree}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
