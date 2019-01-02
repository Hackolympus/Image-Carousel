import React from "react";

const Video = props => {
  if(props.video) {
    return (
        <div id="video">
            <iframe
                src={props.video}
                key={props.video}
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
