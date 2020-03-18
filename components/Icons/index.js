import { Fragment } from "react";
import { motion } from "framer-motion";
// components
import SingleIcon from "../singleIcon";

// data
import windowData from "../../data.js";

const Icons = ({ setWindowOpen }) => {
  return (
    <Fragment>
      {windowData.map((window, i) => {
        return (
          <SingleIcon
            title={window.title}
            iconUrl={window.icon}
            setWindowOpen={setWindowOpen}
            key={i}
          />
        );
      })}
    </Fragment>
  );
};

export default Icons;
