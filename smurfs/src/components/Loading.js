import React from "react";

const Loading = props => {
  console.log("LOADING PROPS ", props);

  return props.fetchingSmurfs ? (
    <div>
      <h2>CONTACTING SERVER...</h2>
    </div>
  ) : null;
};

export default Loading;
