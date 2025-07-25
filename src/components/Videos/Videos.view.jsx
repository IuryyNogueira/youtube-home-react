import React from "react";
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

export default VideosView;
