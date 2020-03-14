import { Fragment } from "./node_modules/react";
import { motion } from "./node_modules/framer-motion";
// components
import WebsitesIcon from "../websitesIcon";
import PreferencesIcon from "../preferencesIcon";
import SingleIcon from "../singleIcon";
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
      <SingleIcon />
    </Fragment>
  );
};

export default Icons;
