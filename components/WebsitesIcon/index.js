import { motion } from "framer-motion";

// styles
import "./styles.module.scss";
import { Fragment, useState } from "react";

const WebsitesIcon = ({ websitesOpen, toggleWebsitesOpen }) => {
  
  function handleClick() {
    toggleWebsitesOpen(!websitesOpen);
    console.log(`the button was clicked`);
  }
  return (
    <Fragment>
      <div className="single-icon" onClick={handleClick}>
        <img src="/icon/folder.png" alt="websites" />
        <p className="icon-title">websites</p>
      </div>
    </Fragment>
  );
};

export default WebsitesIcon;
