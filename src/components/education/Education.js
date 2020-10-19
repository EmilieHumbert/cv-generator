import React, { useState } from "react";
import { nanoid } from "nanoid";

import { Button } from "primereact/button";
import { Card } from "primereact/card";

import EducationItem from "./EducationItem";

const createDegree = () => ({
  id: nanoid(),
  name: "",
  title: "",
  date: "",
  description: "",
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
    <div className="p-grid">
      <div className="p-col-6 p-offset-3 p-d-flex p-jc-between">
        <h1 className="p-d-inline p-mb-0">Education experience</h1>
        <div className="p-d-inline p-as-center">
          <Button
            className="p-button-rounded p-button-success p-button-outlined"
            icon="pi pi-plus"
            onClick={addDegree}
          />
        </div>
      </div>
      <Card className="p-col-6 p-offset-3 p-shadow-5 p-mb-2 p-py-0 p-px-3">
        {degrees.map((degree, index) => (
          <EducationItem
            key={degree.id}
            degree={degree}
            deleteDegree={deleteDegree}
            hasBottomBorder={index !== degrees.length - 1}
            index={index}
            updateDegree={updateDegree}
          />
        ))}
      </Card>
    </div>
  );
};

export default Education;
