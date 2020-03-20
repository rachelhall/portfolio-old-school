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
  setWindowOpen
}) => {
  // const ctx = useContext(IdCTX);
  // console.log(`ctx.id: ${ctx.id}`);

  let filteredArray = windowOpen.filter(item => item != id);
  const closeWindow = () => {
    setWindowOpen(filteredArray);
  };

  return (
    <div className="margin-container" style={{ zIndex: `${zIndex}` }}>
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
