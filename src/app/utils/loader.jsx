import React from "react";

function Loader() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default Loader;
