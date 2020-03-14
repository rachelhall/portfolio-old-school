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
import ReusableWindow from "../../components/reusableWindow";
import SingleSite from "../../components/singleSite"

const Home = () => {
  const constraintsRef = useRef(null);
  const iconConstraints = useRef(null);

  const [canDrag, setCanDrag] = useState(false);

  useEffect(() => {
    const mediaMatch = window.matchMedia("(min-width: 500px)");
    setCanDrag(mediaMatch.matches);
  }, []);

  const [wallpaper, setWallpaper] = useState("green");
  const [preferencesOpen, togglePreferencesOpen] = useState(false);
  const [websitesOpen, toggleWebsitesOpen] = useState(false);

  const [windowOpen, toggleWindowOpen] = useState(true);

  const handleClickPreferences = () => {
    togglePreferencesOpen(!preferencesOpen);
  };

  const handleClickWebsites = () => {
    toggleWebsitesOpen(!websitesOpen);
  };



  const handleClickWindow = () => {
    toggleWindowOpen(!windowOpen)
  } 

  const windowData = [{ title: "Websites" }, { title: "Preferences" }];

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

        {/* {canDrag ? (
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
        ) : (
          <Window />
        )} */}

        <PreferencesWindow
          preferencesOpen={preferencesOpen}
          handleClick={handleClickPreferences}
          setWallpaper={setWallpaper}
          wallpaper={wallpaper}
        />

        <WebsitesWindow
          websitesOpen={websitesOpen}
          handleClick={handleClickWebsites}
          title={windowData[0].title}
        />

        <motion.div className="icons-container" ref={iconConstraints}>
          <Icons
            togglePreferencesOpen={togglePreferencesOpen}
            preferencesOpen={preferencesOpen}
            toggleWebsitesOpen={toggleWebsitesOpen}
            websitesOpen={websitesOpen}
            toggleWindowOpen={toggleWindowOpen}
            windowOpen={windowOpen}
            
          />
          <ReusableWindow title={windowData[0].title} bodyContent={<SingleSite />} toggleWindowOpen={toggleWindowOpen} />
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default Home;
