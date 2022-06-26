import React from "react";
import "./style.scss";

const Loading = () => {
  return (
    <>
      <div className="loading-animation">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          ></svg>{" "}
        </span>
      </div>

      <div class="spinner" style={{ margin: "170px auto" }}></div>
    </>
  );
};

export default Loading;
