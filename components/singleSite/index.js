// styles
import "./styles.scss";

import { sites } from "../../data.js";

const SingleSite = () => {
  return (
    <div className="single-item">
      <ul className="singleItem-list">
        {sites.map((site, i) => {
          return (
            <a href={site.url} target="_blank" className="singleItem-link">
              <li key={i}>{site.name}</li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default SingleSite;
