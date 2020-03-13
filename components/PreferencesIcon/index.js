import { motion } from "framer-motion";

// styles
import "./styles.scss";
import { Fragment, useState } from "react";

const PreferencesIcon = ({
  setWallpaper,
  togglePreferencesOpen,
  preferencesOpen,
  websitesOpen,
  toggleWebsitesOpen
}) => {
  // const [preferencesOpen, togglePreferencesOpen] = useState(false);
  function handleClick() {
    togglePreferencesOpen(!preferencesOpen);
    console.log(`the button was clicked`);
    if (websitesOpen) {
      console.log(`websites is open`)
      toggleWebsitesOpen(!websitesOpen);
    }
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
