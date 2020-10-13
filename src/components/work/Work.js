import React, { useState } from "react";

import WorkForm from "./WorkForm";
import WorkContent from "./WorkContent";

const Work = () => {
  const [edit, setEdit] = useState(false);
  const [job, setJob] = useState({
    companyName: "",
    positionTitle: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (event, updateFunction, field) => {
    updateFunction({ ...job, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (job.endDate < job.startDate) {
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
        <WorkForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          setJob={setJob}
        />
      ) : (
        <WorkContent job={job} handleEditClick={handleEditClick} />
      )}
    </div>
  );
};

export default Work;
