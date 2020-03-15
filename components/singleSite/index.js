// styles
import "./styles.scss";

const sites = [
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

const SingleSite = () => {
  return (
    <div className="single-site">
      <ul className="singleSite-list">
        {sites.map(site => {
          return (
            <li>
              <a href={site.url} target="_blank" className="singleSite-link">
                {site.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SingleSite;
