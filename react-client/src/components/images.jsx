import React from "react";

const Images = props => {
  var imgNum = 1;
  return ( //could refactor to hide this to reduce rendering time.
    <div id="images">
      {props.images.map(img => {
        return (
          <img
            src={img}
            onMouseEnter={e => props.onMouseOver(e)}
            alt={"thumbnail image " + imgNum}
            key={"thumbnail_" + imgNum++}
          />
        );
      })}
    </div>
    //iterate through response-given images.
  );
};

export default Images;
