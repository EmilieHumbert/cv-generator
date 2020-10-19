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
      <div className="p-col-6 p-offset-3 p-px-5 p-d-flex p-jc-between p-ai-end">
        <h1 className="p-mb-0">Work experience</h1>
        <Button
          className="p-button-rounded p-button-success p-button-outlined"
          icon="pi pi-plus"
          onClick={addJob}
        />
      </div>
      <Card className="p-col-6 p-offset-3 p-shadow-5 p-py-0 p-px-3 p-mb-3">
        {jobs.map((job, index) => (
          <WorkItem
            key={job.id}
            deleteJob={deleteJob}
            hasBottomBorder={index !== jobs.length - 1}
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
