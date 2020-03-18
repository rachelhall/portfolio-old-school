// styles
import "./styles.scss";

import { sites } from "../../data.js"

const SingleSite = () => {
  return (
    <div className="single-item">
      <ul className="singleItem-list">
        {sites.map((site, i) => {
          return (
            <li key={i}>
              <a href={site.url} target="_blank" className="singleItem-link">
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
