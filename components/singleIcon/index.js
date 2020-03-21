import { Fragment, useContext, createContext } from "react";
import { motion } from "framer-motion"
import { WindowCTX } from "../../pages/home";
import "./styles.scss";

export const IdCTX = createContext({});

const SingleIcon = ({ title, iconUrl, setZIndex, zIndex, id }) => {
  const ctx = useContext(WindowCTX);
  const handleClickWindow = () => {
    // ctx.setWindowOpen(true);
    ctx.windowOpen.push(id);
    ctx.setWindowOpen(ctx.windowOpen);
    setZIndex(zIndex + 5);
  };
  console.log("id:", id);
  return (
    <Fragment>
      <IdCTX.Provider
      value={{ id: id }}>
        <motion.div className="single-icon" onClick={handleClickWindow}>
          <motion.img whileHover={{scale: 1.1}} src={iconUrl} alt={title} />
          <p className="icon-title">{title}</p>
        </motion.div>
      </IdCTX.Provider>
    </Fragment>
  );
};

export default SingleIcon;
