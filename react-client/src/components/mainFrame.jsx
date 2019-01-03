import React from "react";
import ReactImageMagnify from "react-image-magnify";

class MainFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
    this.checkCurrentSelect = this.checkCurrentSelect.bind(this);
  }

  checkCurrentSelect() {
    if (this.props.currentSelectType === "image") {
      return (
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
          style={{ cursor: "default" }}
          {...{
            smallImage: {
              height: 300,
              alt: "Main image media",
              width: 320,
              src: this.props.currentSelect
            },
            largeImage: {
              src: this.props.currentSelect,
              width: 1200,
              height: 1800
            }
          }}
        />
      );
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div id="main-frame">
        <div
          className={
            this.props.currentSelectType === "image"
              ? "main-image"
              : "hidden-media"
          }
          onMouseEnter={() => this.setState({ isHovered: true })}
          onMouseLeave={() => this.setState({ isHovered: false })}
        >
          {this.checkCurrentSelect()}
        </div>
        <p
          className={
            this.props.currentSelectType === "image"
              ? "main-image-info"
              : "main-image-info-hidden"
          }
        >
          {this.state.isHovered === true
            ? "Click image to open expanded view" //still need to add this modal
            : "Roll over image to zoom in"}
        </p>
        <iframe
          className={
            this.props.currentSelectType === "image"
              ? "hidden-media"
              : "main-video"
          }
          src={this.props.video}
          frameBorder="0"
          alt="Main video media"
        />
      </div>
    );
  }
}

export default MainFrame;
