import { Fragment } from "react";
import { motion } from "framer-motion";
// components
import WebsitesIcon from "../websitesIcon";
import PreferencesIcon from "../preferencesIcon";
import SingleIcon from "../singleIcon";

import windowData from "../../data.js";

const Icons = ({
 toggleWindowOpen
}) => {

  };
  return (
    <Fragment>
      {/* <WebsitesIcon
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
      /> */}

      {windowData.map(window => {
        console.log(window.title);
        
          console.log(windowOpen);
        return (
          <SingleIcon
            title={window.title}
            iconUrl={window.icon}
            handleClickWindow={handleClickWindow}
            setWindowOpen={setWindowOpen}
          />
        );
      })}
    </Fragment>
  );
};

export default Icons;
