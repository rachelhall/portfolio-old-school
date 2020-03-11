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
        toggleWebsitesOpen={toggleWebsitesOpen}
      />
      <PreferencesIcon
        togglePreferencesOpen={togglePreferencesOpen}
        preferencesOpen={preferencesOpen}
      />
    </Fragment>
  );
};

export default Icons;
