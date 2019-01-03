import React from 'react';

const Images = (props) => {

    return (
        <div id="images">
          {props.images.map((img) => {
            return <img src={img} onMouseEnter={(e) => props.onMouseOver(e)}></img>
          })}
        </div>
        
    );
};

export default Images;