import React from "react";
import empty from "../../assets/empty.webp";
function Empty() {
  return (
    <div className="container">
      <img style={{ width: "100%" }} src={empty} alt="" />
    </div>
  );
}

export default Empty;
