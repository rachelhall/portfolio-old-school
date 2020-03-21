import { useState, useRef, Fragment, useEffect, createContext } from "react";
import { motion } from "framer-motion";

// styles
import "../home/styles.scss";

//componenets
import Icons from "../../components/icons";
import Nav from "../../components/nav";
import ReusableWindow from "../../components/reusableWindow";

// data
import windowData from "../../data.js";

export const WindowCTX = createContext({});

const Home = () => {
  const constraintsRef = useRef(null);
  const iconConstraints = useRef(null);

  const [canDrag, setCanDrag] = useState(false);

  const [zIndex, setZIndex] = useState(5);

  useEffect(() => {
    const mediaMatch = window.matchMedia("(min-width: 500px)");
    setCanDrag(mediaMatch.matches);
  }, []);

  const [wallpaper, setWallpaper] = useState("blue");

  const changeWallpaper = newWallpaper => {
    setWallpaper(newWallpaper);
  };

  const [windowOpen, setWindowOpen] = useState(
    ["01z"]
    // `${windowData[0].title}open`
  );
  console.log({ windowOpen });

  return (
    <Fragment>
      <WindowCTX.Provider
        value={{
          changeWallpaper: changeWallpaper,
          windowOpen: windowOpen,
          setWindowOpen: setWindowOpen
        }}
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
          <div className="desktop">
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

            {canDrag ? windowData.map((window, i) => {
              return (
                <motion.div
                  initial={{ y: 0, x: 0 }}
                  drag
                  dragMomentum={false}
                  // dragConstraints={{
                  //   left: -300,
                  //   top: -50,
                  //   bottom: 500,
                  //   right: 300
                  // }}
                  className="window-container"
                  key={`${i}2`}
                >
                  <ReusableWindow
                    title={window.title}
                    header={window.header}
                    bodyContent={window.bodyContent}
                    background={window.background}
                    windowOpen={windowOpen}
                    setWindowOpen={setWindowOpen}
                    changeWallpaper={changeWallpaper}
                    key={`${i}23`}
                    zIndex={zIndex}
                    id={window.id}
                    i={i}
                  />
                </motion.div>
              );
            }) : windowData.map((window, i) => {
              return (
                <div
                  
                  className="window-container"
                  key={`${i}2`}
                >
                  <ReusableWindow
                    title={window.title}
                    header={window.header}
                    bodyContent={window.bodyContent}
                    background={window.background}
                    windowOpen={windowOpen}
                    setWindowOpen={setWindowOpen}
                    changeWallpaper={changeWallpaper}
                    key={`${i}23`}
                    zIndex={zIndex}
                    id={window.id}
                    i={i}
                  />
                </div>
              );
            })
            }

            <motion.div className="icons-container" ref={iconConstraints}>
              <Icons
                zIndex={zIndex}
                setZIndex={setZIndex}
              />
            </motion.div>
          </div>
        </motion.div>
      </WindowCTX.Provider>
    </Fragment>
  );
};

export default Home;
