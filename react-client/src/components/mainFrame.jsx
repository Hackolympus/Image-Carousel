import React from "react";

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
          <img className={this.props.currentSelectType === "image" ? "main-image" : "main-image-hidden"} src={this.props.currentSelect} onMouseEnter={() => this.setState({isHovered: true})} onMouseLeave={() => this.setState({isHovered: false})}/>
          <p className={this.props.currentSelectType === "image" ? "main-image-info" : "main-image-info-hidden"}>{this.state.isHovered === true ? "Click image to open expanded view (not implemented yet)" : "Roll over image to zoom in (not implemented yet)"}</p>
          <iframe className={this.props.currentSelectType === "image" ? "main-video-hidden" : "main-video"} src={this.props.video} frameBorder="0" />
        </div>
      );
    }
}

export default MainFrame;
//was testing out some stuff but as of now this can be stateless
//find a way to make this work for both images and for iframes or find a new way to display videos.
