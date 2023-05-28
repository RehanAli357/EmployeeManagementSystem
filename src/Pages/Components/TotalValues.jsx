import React from "react";

const TotalValues = ({ valuename, value }) => {
  return (
    <React.Fragment>
      <div className="Card">
        <h1>Total Number of {valuename}</h1>
        <p>{value}</p>
      </div>
    </React.Fragment>
  );
};

export default TotalValues;
