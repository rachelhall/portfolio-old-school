import { Fragment } from "react";
import { motion } from "framer-motion";

// components
import Wallpaper from "../Wallpaper";

// styles
import "./styles.scss";
const PreferencesWindow = ({
  wallpaper,
  setWallpaper,
  handleClick,
  preferencesOpen
  // startDrag
}) => {
  return (
    <Fragment>
      {preferencesOpen ? (
        <div className="preferences-margin-container">
          <motion.div
            drag
            dragMomentum={false}
            dragConstraints={{ left: -300, top: -50, bottom: 500, right: 300 }}
            className="preferences-container websites-window"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            <header>
              <p className="close-button" onClick={handleClick}>
                &#10006;
              </p>
              <p>Control Panel</p>
            </header>

            <Wallpaper wallpaper={wallpaper} setWallpaper={setWallpaper} />
          </motion.div>
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};

export default PreferencesWindow;
