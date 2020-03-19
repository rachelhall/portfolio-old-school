import SingleSite from "./components/singleSite";
import Wallpaper from "./components/wallpaper";
import About from "./components/about";
import Movies from "./components/movies";

const windowData = [
  {
    title: "About",
    header: true,
    icon: "/icon/thomas-pixelated.png",
    bodyContent: { component: <About /> },
    background: ""
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
  },
  {
    title: "Movies",
    header: true,
    icon: "/icon/video.png",
    bodyContent: { component: <Movies /> },
    background: ""
  }
];

export const sites = [
  {
    name: "Bible Reading App",
    url: "https://bible-app.now.sh/"
  },
  {
    name: "Texas Leaguer Brewing",
    url: "https://txleaguer.com/  "
  },
  {
    name: "Mariela",
    url: "https://cocky-roentgen-cbc28d.netlify.com/"
  },
  {
    name: "Thomas Harbin Piano",
    url: "https://jolly-leavitt-2d8149.netlify.com/"
  },
  {
    name: "MIDI Synthesizer",
    url: "https://parcelsynth.netlify.com/"
  },
  {
    name: "List App",
    url: "https://the-list.netlify.com/"
  }
];

export const movies = [
  {
    name: "Sykia",
    url: "https://player.vimeo.com/video/101369254",
    id: "101369254"
  },
  {
    name: "Baylor Percussion Group",
    url: "https://player.vimeo.com/video/113229532"
  },
  {
    name: "Corner Music - Electric Guitars",
    url: "https://player.vimeo.com/video/219891708"
  },
  {
    name: "Kaley + Daniel",
    url: "https://player.vimeo.com/video/137778227"
  }
];

export default windowData;
