import React, { useState } from "react";

import WorkForm from "./WorkForm";
import WorkContent from "./WorkContent";

const WorkItem = ({deleteJob, index, job, updateJob}) => {
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return edit ? (
    <WorkForm
      job={job}
      toggleEdit={toggleEdit}
      index={index}
      updateJob={updateJob}
    />
  ) : (
    <WorkContent
      deleteJob={() => deleteJob(index)}
      job={job}
      toggleEdit={toggleEdit}
    />
  );
};

export default WorkItem;
