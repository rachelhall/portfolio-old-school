import SingleSite from "./components/singleSite";
import Wallpaper from "./components/wallpaper";
import About from "./components/about";

const windowData = [
  {
    title: "About",
    header: false,
    icon: "/icon/thomas-icon.png",
    bodyContent: { component: <About /> },
    background: "black"
  },
  {
    title: "Websites",
    header: true,
    icon: "/icon/folder.png",
    bodyContent: { component: <SingleSite /> },
    background: ""
  },
  {
    title: "Preferences",
    header: true,
    icon: "/icon/mac.png",
    bodyContent: { component: <Wallpaper /> },
    background: ""
  }
];

export default windowData;
