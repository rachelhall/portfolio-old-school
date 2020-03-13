import { Fragment } from "react";
import { motion } from "framer-motion";
// components
import WebsitesIcon from "../WebsitesIcon";
import PreferencesIcon from "../PreferencesIcon";
const Icons = ({
  preferencesOpen,
  togglePreferencesOpen,
  websitesOpen,
  toggleWebsitesOpen
}) => {
  return (
    <Fragment>
      <WebsitesIcon
        websitesOpen={websitesOpen}
        preferencesOpen={preferencesOpen}
        toggleWebsitesOpen={toggleWebsitesOpen}
        togglePreferencesOpen={togglePreferencesOpen}
        
        />
      <PreferencesIcon
        togglePreferencesOpen={togglePreferencesOpen}
        toggleWebsitesOpen={toggleWebsitesOpen}
        preferencesOpen={preferencesOpen}
        websitesOpen={websitesOpen}
      />
    </Fragment>
  );
};

export default Icons;
