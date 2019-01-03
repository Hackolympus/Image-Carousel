import React from 'react';

const Images = (props) => {
  var imgNum = 1;
    return (
        <div id="images">
          {props.images.map((img) => {
            return <img src={img} onMouseEnter={(e) => props.onMouseOver(e)} key={imgNum++}></img>
          })}
        </div>
        
    );
};

export default Images;