import { Fragment } from "react";
import { motion } from "framer-motion";

// components
import SingleSite from "../singleSite";

// styles
import "./styles.scss";
const WebsitesWindow = ({ websitesOpen, handleClick }) => {
  return (
    <Fragment>
      {websitesOpen ? (
        <div className="margin-container">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25 }}
            className="websites-window"
          >
            <header>
              <p className="close-button" onClick={handleClick}>
                &#10006;
              </p>
              <p>Websites</p>
            </header>
            <div className="singleSite-container">
              <SingleSite />
            </div>
          </motion.div>
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};
export default WebsitesWindow;
