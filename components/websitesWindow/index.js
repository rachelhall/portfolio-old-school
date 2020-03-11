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
            <p className="close-button" onClick={handleClick}>
              &#10006;
            </p>
            <div className="singleSite-container">
              <ul className="singleSite-list">
                <li>
                  <SingleSite />
                </li>
                <li>
                  <SingleSite />
                </li>
                <li>
                  <SingleSite />
                </li>
                <li>
                  <SingleSite />
                </li>
                <li>
                  <SingleSite />
                </li>
                <li>
                  <SingleSite />
                </li>
              </ul>
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
