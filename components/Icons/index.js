import { Fragment } from "react";
// components
import SingleIcon from "../singleIcon";

// data
import windowData from "../../data.js";

const Icons = ({ setZIndex, zIndex }) => {
  return (
    <Fragment>
      {windowData.map((window, i) => {
        return (
          <SingleIcon
            title={window.title}
            iconUrl={window.icon}
            key={i}
            zIndex={zIndex}
            setZIndex={setZIndex}
            id={`${i}id`}
          />
        );
      })}
    </Fragment>
  );
};

export default Icons;
