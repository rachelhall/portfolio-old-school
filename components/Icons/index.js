import { Fragment } from "react";
import { motion } from "framer-motion";
// components
import SingleIcon from "../singleIcon";

// data
import windowData from "../../data.js";

const Icons = ({ setWindowOpen }) => {
  return (
    <Fragment>
      {windowData.map(window => {
        return (
          <SingleIcon
            title={window.title}
            iconUrl={window.icon}
            setWindowOpen={setWindowOpen}
          />
        );
      })}
    </Fragment>
  );
};

export default Icons;
