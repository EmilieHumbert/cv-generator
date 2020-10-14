import React, { useState } from "react";

import WorkItem from "./WorkItem";

const createJob = () => ({
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
          job={job}
          deleteJob={deleteJob}
          updateJob={updateJob}
          index={index}
        />
      ))}
      <button onClick={addJob}>Add Work experience</button>
    </div>
  );
};

export default Work;
