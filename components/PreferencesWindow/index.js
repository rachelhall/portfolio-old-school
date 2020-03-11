import { Fragment } from "react";
import { motion } from "framer-motion";

// components
import Wallpaper from "../Wallpaper";

// styles
import "./styles.scss";
const PreferencesWindow = ({ setWallpaper, handleClick, preferencesOpen }) => {
  return (
    <Fragment>
      {preferencesOpen ? (
        <div className="preferences-margin-container">
          <motion.div
            className="preferences-container websites-window"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            <header>Control Panel</header>
            <p className="close-button" onClick={handleClick}>
              &#10006;
            </p>
            <Wallpaper setWallpaper={setWallpaper} />
          </motion.div>
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};

export default PreferencesWindow;
