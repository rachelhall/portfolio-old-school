import Draggable, { DraggableCore } from "react-draggable";
import { motion } from "framer-motion";
import "../home/styles.scss";
import { useState, useRef } from "react";

//componenets
import Window from "../../components/window";
import Icons from "../../components/Icons";
import PreferencesWindow from "../../components/PreferencesWindow";
import WebsitesWindow from "../../components/websitesWindow";

const Home = () => {
  const constraintsRef = useRef(null);
  const iconConstraints = useRef(null);

  const [wallpaper, setWallpaper] = useState("green");
  const [preferencesOpen, togglePreferencesOpen] = useState(false);
  const [websitesOpen, toggleWebsitesOpen] = useState(false);

  const handleClickPreferences = () => {
    togglePreferencesOpen(!preferencesOpen)
  }

  const handleClickWebsites = () => {
    toggleWebsitesOpen(!websitesOpen)
  }
  return (
    <motion.div
      ref={constraintsRef}
      className={
        wallpaper === "stars" ? "entire-display stars" : "entire-display"
      }
    >
      <motion.div drag dragConstraints={{left: -300, top: -50, bottom: 500, right: 300}}>
        <Window />
      </motion.div>
      <motion.div drag dragConstraints={{left: -300, top: -50, bottom: 500, right: 300}}>
        <PreferencesWindow preferencesOpen={preferencesOpen} handleClick={handleClickPreferences} />
      </motion.div>
      <motion.div drag dragConstraints={{left: -80, top: -50, bottom: 500, right: 300}}>
        <WebsitesWindow websitesOpen={websitesOpen} handleClick={handleClickWebsites} />
      </motion.div>

      <motion.div className="icons-container" ref={iconConstraints}>
        <Icons
          togglePreferencesOpen={togglePreferencesOpen}
          preferencesOpen={preferencesOpen}
          toggleWebsitesOpen={toggleWebsitesOpen}
          websitesOpen={websitesOpen}
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
