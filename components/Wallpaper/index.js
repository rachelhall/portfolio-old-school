import { Fragment } from "react";

const Wallpaper = ({ setWallpaper }) => {
  function setStars() {
    setWallpaper("stars");
    console.log("stars was clicked");
  }

  function setGreen() {
      setWallpaper("green")
  }

  return (
    <Fragment>
      <h3>Select Wallpaper</h3>
      <button onClick={setGreen}>Green</button>
      <div onClick={setStars}>Stars</div>
    </Fragment>
  );
};

export default Wallpaper;
