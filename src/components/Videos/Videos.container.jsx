import React from "react";
import { useState, useCallback, useEffect, useMemo} from "react";
import VideosView from "./Videos.view";
import { takeImagesForBanner } from "../../api/videosBannerApi";

const VideosContent = ({ sideBarState, categorySelect }) => {
 const [videos, setVideos] = useState([]);

  const videosPackage = useCallback(async () => {
    const videosPackage = await takeImagesForBanner(categorySelect);
    setVideos(videosPackage);
  }, [categorySelect]);

  useEffect(() => {
    videosPackage();
  }, [videosPackage]);

   

  return <VideosView sideBarState={sideBarState} videos={videos} />;
};

export default VideosContent;
