import { useState, useRef, Fragment, useEffect, createContext } from "react";
import { motion } from "framer-motion";

// styles
import "../home/styles.scss";

//componenets
import Icons from "../../components/Icons";
import Nav from "../../components/nav";
import ReusableWindow from "../../components/reusableWindow";

// data
import windowData from "../../data.js";

export const WindowCTX = createContext({});

const Home = () => {
  const constraintsRef = useRef(null);
  const iconConstraints = useRef(null);

  const [canDrag, setCanDrag] = useState(false);

  useEffect(() => {
    const mediaMatch = window.matchMedia("(min-width: 500px)");
    setCanDrag(mediaMatch.matches);
  }, []);

  const [wallpaper, setWallpaper] = useState("blue");

  // create context
  // create default state
  // wrap in a provider
  // useContext Hook

  const changeWallpaper = newWallpaper => {
    setWallpaper(newWallpaper);
  };

  const [windowOpen, setWindowOpen] = useState(`${windowData[0].title}open`);

  const closeWindow = () => {
    setWindowOpen(null);
  };

  return (
    <Fragment>
      <WindowCTX.Provider
        value={{ changeWallpaper: changeWallpaper, test: "testing CTX" }}
      >
        <motion.div
          ref={constraintsRef}
          className={
            wallpaper === "stars"
              ? "entire-display stars"
              : wallpaper === "green"
              ? "entire-display green"
              : wallpaper === "gray"
              ? "entire-display gray"
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

          {windowData.map((window, i) => {
            return (
              <motion.div
                drag
                dragMomentum={false}
                dragConstraints={{
                  left: -300,
                  top: -50,
                  bottom: 500,
                  right: 300
                }}
                className="window-container"
              >
                <ReusableWindow
                  title={window.title}
                  header={window.header}
                  bodyContent={window.bodyContent}
                  background={window.background}
                  windowOpen={windowOpen}
                  closeWindow={closeWindow}
                  changeWallpaper={changeWallpaper}
                  key={i}
                />
              </motion.div>
            );
          })}

          <motion.div className="icons-container" ref={iconConstraints}>
            <Icons setWindowOpen={setWindowOpen} windowOpen={windowOpen} />
          </motion.div>
        </motion.div>
      </WindowCTX.Provider>
    </Fragment>
  );
};

export default Home;
