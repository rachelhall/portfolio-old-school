import { Fragment, useContext, useState } from "react";
import { motion } from "framer-motion";

import "./styles.scss";

// import windowData from "../../data"
import { IdCTX } from "../../components/singleIcon";

const ReusableWindow = ({
  title,
  bodyContent,
  background,
  header,
  windowOpen,
  id,
  zIndex,
  setWindowOpen,
  i
}) => {
  const isEven = i => {
    if (i % 2 == 0) return true;
    else return false;
  };

  let topMarginIncrement;
  let leftMarginIncrement;

  const setMargins = () => {
    if (isEven(i)) {
      topMarginIncrement = i * 25;
      leftMarginIncrement = i * 25;
    } else {
      topMarginIncrement = i * -10;
      leftMarginIncrement = i * -25;
    }
  };

  setMargins(i);

  console.log({ topMarginIncrement });

  let filteredArray = windowOpen.filter(item => item != id);
  const closeWindow = () => {
    setWindowOpen(filteredArray);
  };

  return (
    <div
      className="margin-container"
      style={{
        zIndex: `${zIndex}`,
        marginTop: `${topMarginIncrement}px`,
        marginLeft: `${leftMarginIncrement}px`
      }}
    >
      {windowOpen.includes(id) ? (
        // === `${title}open`
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.25 }}
          className={background ? `window ${background}-background` : `window`}
        >
          {header ? (
            <Fragment>
              <header>
                <p className="close-button" onClick={closeWindow}>
                  &#10006;
                </p>
                <p>{title}</p>
              </header>
              <div className="body-content">{bodyContent.component}</div>
            </Fragment>
          ) : (
            <div className="body-content">{bodyContent.component}</div>
          )}
        </motion.div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ReusableWindow;
