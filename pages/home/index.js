import Draggable, { DraggableCore } from "react-draggable";
import { motion } from "framer-motion";
import "../home/styles.scss";
import { useState, useRef } from "react";

//componenets
import Window from "../../components/window";
import Websites from "../../components/websites";
import Preferences from "../../components/Preferences";

const Home = () => {
  const constraintsRef = useRef(null);

  const [wallpaper, setWallpaper] = useState("green");
  return (
    <motion.div
      ref={constraintsRef}
      className={
        wallpaper === "stars" ? "entire-display stars" : "entire-display"
      }
    >
      <motion.div drag dragConstraints={constraintsRef}>
        <Window />
      </motion.div>

      <motion.div drag dragConstraints={constraintsRef}>
        <Websites />
      </motion.div>
      <motion.div drag dragConstraints={constraintsRef}>
        <Preferences setWallpaper={setWallpaper} />
      </motion.div>
    </motion.div>
  );
};

export default Home;
