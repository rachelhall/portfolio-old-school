import { motion } from "framer-motion";

// components
import Wallpaper from "../Wallpaper"
// styles
import "./styles.scss";
import { Fragment, useState } from "react";

const Preferences = ({ setWallpaper }) => {
  const [preferencesOpen, togglePreferencesOpen] = useState(false);
  function handleClick() {
    togglePreferencesOpen(!preferencesOpen);
    console.log(`the button was clicked`);
  }
  return (
    <Fragment>
      {preferencesOpen ? (
        <div className="margin-container">
          <motion.div className="preferences-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25 }}
            className="websites-window"
          >
            <p className="close-button" onClick={handleClick}>
              &#10006;
            </p>
            <Wallpaper setWallpaper={setWallpaper}/>
          </motion.div>
        </div>
      ) : (
        <div className="single-icon" onClick={handleClick}>
          <img src="/icon/mac.png" alt="preferences" />
          <p className="icon-title">preferences</p>
        </div>
      )}
    </Fragment>
  );
};

export default Preferences;
