import { Fragment } from "react";
import { motion } from "framer-motion";

import "./styles.scss";

const ReusableWindow = ({
  closeWindow,
  title,
  bodyContent,
  windowOpen,
  background,
  header
}) => {
  // const blackBackground = true;
  return (
    <div className="margin-container">
      {windowOpen === `${title}open` ? (
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
