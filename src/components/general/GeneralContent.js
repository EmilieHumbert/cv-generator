import React from "react";

const GeneralContent = ({generalInfo, handleEditClick}) => {
  return (
    <div>
      <h1>{generalInfo.name}</h1>
      <p>Email: {generalInfo.email}</p>
      <p>Phone number: {generalInfo.phone}</p>
      <button onClick={handleEditClick}>EDIT</button>
    </div>
  );
};

export default GeneralContent;
