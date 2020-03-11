// styles
import "./styles.scss"

const sites = [
  {
    name: "Mariela",
    url: "https://cocky-roentgen-cbc28d.netlify.com/"
  },
  {
    name: "Thomas Harbin Piano",
    url: "www.thomasharbinmusic.com"
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

// console.log(sites.map(site => site.name));

const SingleSite = () => {

  console.log(sites);
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
