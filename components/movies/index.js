import { useState, useEffect, Fragment } from "react";

// components
import MovieModal from "../../components/movieModal";

// styles
import "./styles.module.scss";

// data
import { movies } from "../../data";

const Movies = () => {
  const [videoId, setVideoId] = useState(movies[0].url);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Fragment>
      {modalOpen ? (
        <MovieModal toggleModalOpen={toggleModalOpen} videoId={videoId} />
      ) : (
        <div></div>
      )}
      <div className="single-item">
        <ul className="singleItem-list">
          {movies.map((item, i) => {
            return (
              <Fragment>
                <li
                  className="singleItem-link"
                  onClick={ () => {
                    setVideoId(item.url);
                    setModalOpen(!modalOpen);
                  }}
                  key={i}
                >
                  {item.name}
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Movies;
