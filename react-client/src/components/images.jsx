import React from 'react';

const Images = (props) => {
  if(props.images[5]) {
    return (
      <div id="images">
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[0]}></img>
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[1]}></img>
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[2]}></img>
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[3]}></img>
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[4]}></img>
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[5]}></img>
      </div> 
    );
  } else if (props.images[4]) {
    return (
      <div id="images">
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[0]}></img>
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[1]}></img>
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[2]}></img>
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[3]}></img>
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[4]}></img>
      </div> 
    )
  }  else if (props.images[3]) {
    return (
      <div id="images">
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[0]}></img>
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[1]}></img>
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[2]}></img>
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[3]}></img>
      </div> 
    )
  }  else if (props.images[2]) {
    return (
      <div id="images">
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[0]}></img>
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[1]}></img>
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[2]}></img>
      </div> 
    )
  }  else if (props.images[1]) {
    return (
      <div id="images">
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[0]}></img>
        <img onMouseEnter={(e) => props.onMouseOver(e)} src={props.images[1]}></img>
      </div> 
    )
  }
  return (
    <div id="images">
      <img onMouseEnter={props.onMouseOver} src={props.images[0]}></img>
    </div> 
  );
};

export default Images;