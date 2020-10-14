import React, { useState } from "react";

import WorkForm from "./WorkForm";
import WorkContent from "./WorkContent";

const createJob = () => ({
  companyName: "",
  positionTitle: "",
  description: "",
  startDate: "",
  endDate: "",
});
const Work = () => {
  const [edit, setEdit] = useState(false);
  const [jobs, setJobs] = useState([createJob()]);

  const handleChange = (index, field, value) => {
    const updatedJob = { ...jobs[index], [field]: value };
    setJobs(
      jobs.map((job, jobIndex) => {
        return jobIndex === index ? updatedJob : job;
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (jobs.endDate < jobs.startDate) {
      alert("Please pick an end date after the start date");
      setEdit(true);
      return;
    }
    setEdit(false);
  };

  const handleEditClick = () => {
    setEdit(true);
  };

  const addJob = () => {
    setJobs([...jobs, createJob()]);
  };

  const deleteJob = (index) => {
    const updateJobs = jobs.filter((job, jobIndex) => {
      return index !== jobIndex;
    });
    setJobs(updateJobs);
  };

  return (
    <div>
      {jobs.map((job, index) => {
        return edit ? (
          <WorkForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setJob={setJobs}
            job={job}
          />
        ) : (
          <WorkContent
            job={job}
            handleEditClick={handleEditClick}
            deleteJob={() => deleteJob(index)}
          />
        );
      })}
      <button onClick={addJob}>Add Work experience</button>
    </div>
  );
};

export default Work;
