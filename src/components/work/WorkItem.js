import React, { useState } from "react";

import WorkForm from "./WorkForm";
import WorkContent from "./WorkContent";

const WorkItem = ({ deleteJob, hasBottomBorder, index, job, updateJob }) => {
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div
      className={hasBottomBorder ? "p-mb-5 p-pb-5" : ""}
      style={hasBottomBorder ? { borderBottom: "1px solid lightgrey" } : {}}
    >
      {edit ? (
        <WorkForm
          index={index}
          job={job}
          toggleEdit={toggleEdit}
          updateJob={updateJob}
        />
      ) : (
        <WorkContent
          deleteJob={() => deleteJob(index)}
          job={job}
          toggleEdit={toggleEdit}
        />
      )}
    </div>
  );
};

export default WorkItem;
