import React from "react";
import ReactImageMagnify from "react-image-magnify";

class MainFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  componentDidMount() {
    //could mount the iframe video and hide it here for refactoring but skipping for now.
  }

  render() {
    return (
      <div id="main-frame">
        <div className={
            this.props.currentSelectType === "image"
              ? "main-image"
              : "hidden"
          }
          onMouseEnter={() => this.setState({ isHovered: true })}
          onMouseLeave={() => this.setState({ isHovered: false })}
          >
        <ReactImageMagnify 
        imageClassName={
            this.props.currentSelectType === "image"
              ? "main-image"
              : "main-image-hidden"
          }
        enlargedImageContainerClassName={
            this.props.currentSelectType === "image"
              ? "main-image"
              : "main-image-hidden"
          }
          fadeDurationInMs={0}
          hoverDelayInMs={0}
          style={{cursor: "default"}}
          {...{
            smallImage: {
              height: 300,
              alt: "Main Image",
              width: 300,
              src: this.props.currentSelect
            },
            largeImage: {
              src: this.props.currentSelect,
              width: 1200,
              height: 1800
            }
          }}
        />
        </div>
        <p
          className={
            this.props.currentSelectType === "image"
              ? "main-image-info"
              : "main-image-info-hidden"
          }
        >
          {this.state.isHovered === true
            ? "Click image to open expanded view (not implemented yet)"
            : "Roll over image to zoom in"}
        </p>
        
        <iframe
          className={
            this.props.currentSelectType === "image"
              ? "hidden"
              : "main-video"
          }
          src={this.props.video}
          frameBorder="0"
        />
      </div>
    );
  }
}

export default MainFrame;
//was testing out some stuff but as of now this can be stateless
//find a way to make this work for both images and for iframes or find a new way to display videos.
