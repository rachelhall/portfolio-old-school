import { Fragment } from "react";

const SingleIcon = () => {
  return (
    <Fragment>
      <div className="single-icon" onClick={handleClick}>
        <img src="/icon/mac.png" alt="preferences" />
        <p className="icon-title">preferences</p>
      </div>
    </Fragment>
  );
};

export default SingleIcon;
