import React from 'react';

const Images = (props) => {
  if(props.images[5]) {
    return (
      <div id="images">
        {props.images.map((img) => {
          return <img src={img} key={img}></img>
        })}
      </div> 
    );
  } else if (props.images[4]) {
    return (
      <div id="images">
        <img src={props.images[0]} key={props.images[0]}></img>
        <img src={props.images[1]} key={props.images[1]}></img>
        <img src={props.images[2]} key={props.images[2]}></img>
        <img src={props.images[3]} key={props.images[3]}></img>
        <img src={props.images[4]} key={props.images[4]}></img>
      </div> 
    )
  }  else if (props.images[3]) {
    return (
      <div id="images">
        <img src={props.images[0]} key={props.images[0]}></img>
        <img src={props.images[1]} key={props.images[1]}></img>
        <img src={props.images[2]} key={props.images[2]}></img>
        <img src={props.images[3]} key={props.images[3]}></img>
      </div> 
    )
  }  else if (props.images[2]) {
    return (
      <div id="images">
        <img src={props.images[0]} key={props.images[0]}></img>
        <img src={props.images[1]} key={props.images[1]}></img>
        <img src={props.images[2]} key={props.images[2]}></img>
      </div> 
    )
  }  else if (props.images[1]) {
    return (
      <div id="images">
        <img src={props.images[0]} key={props.images[0]}></img>
        <img src={props.images[1]} key={props.images[1]}></img>
      </div> 
    )
  }
  return (
    <div id="images">
      <img src={props.images[0]} key={props.images[0]}></img>
    </div> 
  );
};

export default Images;