import { Fragment } from "react";

// styles
import "./styles.scss";

const Wallpaper = ({ setWallpaper }) => {
  function setStars() {
    setWallpaper("stars");
    console.log("stars was clicked");
  }

  function setGreen() {
    setWallpaper("green");
  }

  return (
    <Fragment>
      
      <h3>Select Wallpaper</h3>
      <button onClick={setGreen}>Green</button>
      <button onClick={setStars}>Stars</button>
    </Fragment>
  );
};

export default Wallpaper;
