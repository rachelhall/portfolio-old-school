import { motion } from "framer-motion";

// styles
import "./styles.scss";
import { Fragment, useState } from "react";

const PreferencesIcon = ({
  setWallpaper,
  togglePreferencesOpen,
  preferencesOpen
}) => {
  // const [preferencesOpen, togglePreferencesOpen] = useState(false);
  function handleClick() {
    togglePreferencesOpen(!preferencesOpen);
    console.log(`the button was clicked`);
  }
  return (
    <Fragment>
      <div className="single-icon" onClick={handleClick}>
        <img src="/icon/mac.png" alt="preferences" />
        <p className="icon-title">preferences</p>
      </div>
    </Fragment>
  );
};

export default PreferencesIcon;
