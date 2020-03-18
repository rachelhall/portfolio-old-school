import { Fragment } from "react";

import "./styles.scss";

const SingleIcon = ({ title, iconUrl, setWindowOpen }) => {
  const handleClickWindow = () => {
    setWindowOpen(`${title}open`);
  }
  return (
    <Fragment>
      <div className="single-icon" onClick={handleClickWindow}>
        <img src={iconUrl} alt={title} />
        <p className="icon-title">{title}</p>
      </div>
    </Fragment>
  );
};

export default SingleIcon;
