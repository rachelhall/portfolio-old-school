import SingleSite from "./components/singleSite";
import Wallpaper from "./components/wallpaper";
import About from "./components/about";

const windowData = [
  { title: "About", icon: "/icon/thomas-icon.png", bodyContent: {component: <About />} },
  {
    title: "Websites",
    icon: "/icon/folder.png",
    bodyContent: { component: <SingleSite />, props: "body props" }
  },
  {
    title: "Preferences",
    icon: "/icon/mac.png",
    bodyContent: { component: <Wallpaper />, props: "" }
  }
];

export default windowData;
