import React from "react";

const Video = props => {
  if (props.video) {
    return (
      <div id="video">
        <img
          id="video-thumbnail"
          src="https://images-na.ssl-images-amazon.com/images/I/21LlmxUCtTS.SS40_BG85,85,85_BR-120_PKdp-play-icon-overlay__.png"
          onMouseEnter={e => props.onMouseOver(e)}
          key="thumbnail_video"
          alt="Video Thumbnail"
        />
      </div>
    );
  }
  return <div id="video" />;
  //If video is null then don't display the thumbnail.
  //should add onclick functionality for a modal video
};

export default Video;
