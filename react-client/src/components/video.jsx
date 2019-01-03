import React from "react";

const Video = props => {
  if(props.video) {
    return (
        <div id="video">
            <img
                id="video-thumbnail"
                src="https://images-na.ssl-images-amazon.com/images/I/21LlmxUCtTS.SS40_BG85,85,85_BR-120_PKdp-play-icon-overlay__.png"
                onMouseEnter={(e) => props.onMouseOver(e)}
                key="thumbnail_video"
                alt="Video Thumbnail"
            />
        </div>
    );
  } //consider using a thumbnail instead of an iframe
  return (
    <div id="video">
    </div>
  );
};

export default Video;
