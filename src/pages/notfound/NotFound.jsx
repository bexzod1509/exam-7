import React from "react";
import notfound from "../../assets/404.webp";
function NotFound() {
  return (
    <div className="container">
      <img
        style={{ marginTop: "10px", marginLeft: "110px", width: "80%" }}
        src={notfound}
        alt=""
      />
    </div>
  );
}

export default NotFound;
