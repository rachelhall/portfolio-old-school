import { motion } from "framer-motion"

import "./styles.scss";

const ReusableWindow = ({ closeWindow, title, bodyContent, windowOpen, changeWallpaper }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.25 }}
      className="margin-container"
    >
      {windowOpen === `${title}open` ? (
        <div className="window">
          <header>
            <p className="close-button" onClick={closeWindow}>
              &#10006;
            </p>
            <p>{title}</p>
          </header>
          <div className="body-content">{bodyContent.component}</div>
        </div>
      ) : (
        <div></div>
      )}
    </motion.div>
  );
};

export default ReusableWindow;
