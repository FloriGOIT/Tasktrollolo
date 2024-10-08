import React from "react";
import css from "./Loader.module.css";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <ClipLoader color="rgba(82, 59, 126, 0.6)" />
    </div>
  );
};

export default Loader;
