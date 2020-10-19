import React, { useState } from "react";
import { nanoid } from "nanoid";

import { Button } from "primereact/button";
import { Card } from "primereact/card";

import WorkItem from "./WorkItem";

const createJob = () => ({
  id: nanoid(),
  companyName: "",
  positionTitle: "",
  description: "",
  date: "",
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
    <div className="p-grid">
      <div className="p-col-6 p-offset-3 p-d-flex p-jc-between">
        <h1 className="p-d-inline" style={{ marginBottom: "0" }}>
          Work experience
        </h1>
        <div className="p-d-inline p-as-center">
          <Button
            className="p-button-rounded p-button-success p-button-outlined"
            icon="pi pi-plus"
            onClick={addJob}
          />
        </div>
      </div>
      <Card
        className="p-col-6 p-offset-3 p-shadow-5"
        style={{ padding: "0 1rem", marginBottom: "10px" }}
      >
        {jobs.map((job, index) => (
          <WorkItem
            key={job.id}
            deleteJob={deleteJob}
            index={index}
            job={job}
            updateJob={updateJob}
          />
        ))}
      </Card>
    </div>
  );
};

export default Work;
