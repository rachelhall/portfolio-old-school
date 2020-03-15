import { motion } from "framer-motion";
import "../home/styles.scss";
import { useState, useRef, Fragment, useEffect } from "react";
import dynamic from "next/dynamic";

//componenets
import Icons from "../../components/Icons";
import PreferencesWindow from "../../components/PreferencesWindow";
import WebsitesWindow from "../../components/websitesWindow";
import Nav from "../../components/nav";
import ReusableWindow from "../../components/reusableWindow";
import SingleSite from "../../components/singleSite";

// data
import windowData from "../../data.js";

const Home = () => {
  const constraintsRef = useRef(null);
  const iconConstraints = useRef(null);

  const [canDrag, setCanDrag] = useState(false);

  useEffect(() => {
    const mediaMatch = window.matchMedia("(min-width: 500px)");
    setCanDrag(mediaMatch.matches);
  }, []);

  const [wallpaper, setWallpaper] = useState("green");

  const [windowOpen, setWindowOpen] = useState(`${windowData[1].title}open`);

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

        {windowData.map(window => {
          return (
            <ReusableWindow
              title={window.title}
              bodyContent={<SingleSite />}
              windowOpen={windowOpen}
            />
          );
        })}

        <motion.div className="icons-container" ref={iconConstraints}>
          <Icons setWindowOpen={setWindowOpen} windowOpen={windowOpen} />
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default Home;
