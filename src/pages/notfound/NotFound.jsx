import React from "react";
import notfound from "../../assets/404.webp";
function NotFound() {
  return (
    <div className="container">
      <img style={{ width: "100%" }} src={notfound} alt="" />
    </div>
  );
}

export default NotFound;
