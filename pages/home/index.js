import { motion } from "framer-motion";
import "../home/styles.scss";
import { useState, useRef, Fragment, useEffect } from "react";
import dynamic from "next/dynamic";

// utils
import { useMediaQuery } from "../../utils/useMediaQuery";

//componenets
import Window from "../../components/window";
import Icons from "../../components/Icons";
import PreferencesWindow from "../../components/PreferencesWindow";
import WebsitesWindow from "../../components/websitesWindow";
import Nav from "../../components/nav";

const Home = () => {
  const constraintsRef = useRef(null);
  const iconConstraints = useRef(null);

  const [wallpaper, setWallpaper] = useState("green");
  const [preferencesOpen, togglePreferencesOpen] = useState(false);
  const [websitesOpen, toggleWebsitesOpen] = useState(false);

  const handleClickPreferences = () => {
    togglePreferencesOpen(!preferencesOpen);
  };

  const handleClickWebsites = () => {
    toggleWebsitesOpen(!websitesOpen);
  };

  const removeDrag = useMediaQuery("(max-width: 600px)");

  return (
    <Fragment>
      <motion.div
        ref={constraintsRef}
        className={
          wallpaper === "stars"
            ? "entire-display stars"
            : wallpaper === "blue"
            ? "entire-display blue"
            : "entire-display"
        }
      >
        <Nav />

        {removeDrag ? (
          <Window />
        ) : (
          <motion.div
            drag
            dragMomentum={false}
            dragConstraints={{
              left: -300,
              top: -50,
              bottom: 500,
              right: 300
            }}
          >
            <Window />
          </motion.div>
        )}

        <PreferencesWindow
          preferencesOpen={preferencesOpen}
          handleClick={handleClickPreferences}
          setWallpaper={setWallpaper}
          wallpaper={wallpaper}
        />

        <WebsitesWindow
          websitesOpen={websitesOpen}
          handleClick={handleClickWebsites}
        />

        <motion.div className="icons-container" ref={iconConstraints}>
          <Icons
            togglePreferencesOpen={togglePreferencesOpen}
            preferencesOpen={preferencesOpen}
            toggleWebsitesOpen={toggleWebsitesOpen}
            websitesOpen={websitesOpen}
          />
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default Home;
