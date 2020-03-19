import { Fragment, useContext } from "react";
import { motion } from "framer-motion";

import "./styles.scss";

// import windowData from "../../data"
import { IdCTX } from "../../components/singleIcon";

const ReusableWindow = ({
  closeWindow,
  title,
  bodyContent,
  windowOpen,
  background,
  header,
  zIndex
}) => {
  const ctx = useContext(IdCTX);
  console.log(`ctx.id: ${ctx.id}`);

  return (
    <div className="margin-container" style={{ zIndex: `${zIndex}` }}>
      {windowOpen.includes('0id')  ? (
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
