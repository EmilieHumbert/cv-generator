import React, { useState } from "react";
import { nanoid } from "nanoid";

import { Button } from "primereact/button";

import WorkItem from "./WorkItem";

const createJob = () => ({
  id: nanoid(),
  companyName: "",
  positionTitle: "",
  description: "",
  startDate: "",
  endDate: "",
});

const Work = () => {
  const [jobs, setJobs] = useState([createJob()]);

  const updateJob = (index, updatedJob) => {
    setJobs(
      jobs.map((job, jobIndex) => {
        return jobIndex === index ? updatedJob : job;
      })
    );
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
      {jobs.map((job, index) => (
        <WorkItem
          key={job.id}
          deleteJob={deleteJob}
          index={index}
          job={job}
          updateJob={updateJob}
        />
      ))}
      <div className="p-d-flex p-flex-column">
        <div className="p-col-align-center">
          <Button
            className="p-button-rounded p-button-success p-button-outlined"
            icon="pi pi-plus"
            label="Add additional work experience"
            onClick={addJob}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
