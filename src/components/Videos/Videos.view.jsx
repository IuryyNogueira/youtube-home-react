import React from "react";
import PropTypes from "prop-types";
import "./Videos.css";
import VideoCard from "./VideoCard";

const VideosView = ({ sideBarState, videos }) => {
  return (
    <section
      className={`conteudo-principal ${sideBarState ? "expanded" : "reduced"}`}
      id="conteudo-principal"
    >
      <div className="videos-grid" id="videos-grid">
        {videos?.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
};

VideosView.propTypes = {
  sideBarState: PropTypes.bool,
  videos: PropTypes.array,
};

VideosView.defaultProps = {
  sideBarState: false,
  videos: [],
};

export default VideosView;
