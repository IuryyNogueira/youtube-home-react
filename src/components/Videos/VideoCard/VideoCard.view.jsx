import "./VideoCard.css";
import PropTypes from "prop-types";

const VideoCardView = ({ video }) => {
  return (
    <div className="video-card">
      <div className="thumbnail">
        <img src={video?.src?.medium} alt="Thumbnail" />
        <span className="tempo-pequeno">20:54</span>
      </div>
      <div className="video-info">
        <img src={video?.src?.tiny} alt="Canal" className="channel-icon" />
        <div className="text-info">
          <h4>{video.photographer}</h4>
          <p>{video.photographer}</p>
          <p>131 mil visualizações há 2 meses</p>
        </div>
        <div className="menu-video">⋮</div>
      </div>
    </div>
  );
};

VideoCardView.propTypes = {
  video: PropTypes.object,
};

VideoCardView.defaultProps = {
  video: {},
};

export default VideoCardView;
