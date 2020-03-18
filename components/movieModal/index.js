const MovieModal = ({ toggleModalOpen, videoId }) => {



  console.log(videoId)
  return (
    <div className="videoplayer-container modal">
      <div className="modal-header">
        <span className="close-btn" onClick={toggleModalOpen}>
          &times;
        </span>
      </div>
      <div class="modal-content" id="player">
        <iframe
          title="vimeo-player"
          src={videoId}
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieModal;
