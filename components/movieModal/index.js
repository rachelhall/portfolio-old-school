const MovieModal = ({ toggleModalOpen,videoId, setVideoId }) => {
    return (
        <div className="videoplayer-container modal">
          <div class="modal-header">
            <span class="close-btn" onClick={toggleModalOpen}>
              &times;
            </span>
          </div>
          <div class="plyr__video-embed modal-content" id="player">
            <iframe
              src={videoId}
              allowfullscreen
              allowtransparency
              allow="autoplay"
            ></iframe>
          </div>
        </div>
    )
};

export default MovieModal;