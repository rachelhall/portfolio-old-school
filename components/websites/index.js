// styles
import "./styles.module.scss";
import { Fragment, useState } from "react";

// components
import SingleSite from "../../components/singleSite"

const Websites = () => {
  const [websitesOpen, toggleWebsitesOpen] = useState(false);
  function handleClick() {
    toggleWebsitesOpen(!websitesOpen);
    console.log(`the button was clicked`);
  }
  return (
    <Fragment>
      {websitesOpen ? (
        <div className="margin-container">
          <div className="websites-window">
            <SingleSite />
            
          </div>
        </div>
      ) : (
        <div className="single-icon" onClick={handleClick}>
          <img src="/icon/folder.png" alt="web portfolio" />
          <p className="icon-title">websites</p>
        </div>
      )}
    </Fragment>
  );
};

export default Websites;
