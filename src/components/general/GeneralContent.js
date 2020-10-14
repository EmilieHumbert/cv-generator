import React from "react";

const GeneralContent = ({generalInfo, toggleEdit}) => {
  return (
    <div>
      <h1>{generalInfo.name}</h1>
      <p>Email: {generalInfo.email}</p>
      <p>Phone number: {generalInfo.phone}</p>
      <button onClick={toggleEdit}>EDIT</button>
    </div>
  );
};

export default GeneralContent;
