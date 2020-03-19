import { Fragment, useContext } from "react";

// styles
import "./styles.scss";
import { WindowCTX } from "../../pages/home";

const Wallpaper = ({ wallpaper }) => {
  const ctx = useContext(WindowCTX);
  
  function setStars() {
    ctx.changeWallpaper('stars');
  }

  function setGreen() {
    ctx.changeWallpaper("green");
  }
  function setBlue() {
    ctx.changeWallpaper("blue");
  }

  function setGray() {
    ctx.changeWallpaper("gray");
  }

  return (
    <Fragment>
      <div className="wallpaper-content">
        <h3>Select Wallpaper</h3>
        <div className="wallpaper-choices">
          <button onClick={setGreen}>
            <img src="/wallpaper/green.png" alt="green background" 
            className={wallpaper == 'green' ? `active-wallpaper` : ``}
            ></img>
          </button>
          <button onClick={setStars}>
            <img src="/wallpaper/stars.png" alt="stars background" 
            className={wallpaper == 'stars' ? `active-wallpaper` : ``}/>
          </button>
          <button onClick={setBlue}>
            <img src="/wallpaper/blue.png" alt="stars background" 
            className={wallpaper == 'blue' ? `active-wallpaper` : ``}/>
          </button>
          <button onClick={setGray}>
            <img src="/wallpaper/gray.png" alt="stars background" 
            className={wallpaper == 'gray' ? `active-wallpaper` : ``}/>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Wallpaper;
