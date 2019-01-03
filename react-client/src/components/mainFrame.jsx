import React from "react";

class MainFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      wasClicked: false
    };
    // this.zoom = this.zoom.bind(this);
  }

  componentDidMount() {
    //could mount the iframe video and hide it here for refactoring but skipping for now.
  }

//   zoom() {
//     this.state.wasClicked ? 
//   }

  render() {
    if (this.props.currentSelectType === "image") {
      return (
        <div id="main-frame">
          <img className="main-image" src={this.props.currentSelect} onMouseEnter={() => this.setState({isHovered: true})} onMouseLeave={() => this.setState({isHovered: false})}/>
          <p>{this.state.isHovered ? "Click image to open expanded view (not implemented yet)" : "Roll over image to zoom in"}</p>
        </div>
      );
    } else if (this.props.currentSelectType === "video") {
      return (
        <div id="main-frame">
          <iframe src={this.props.currentSelect} frameBorder="0" />
        </div>
      );
    }
  }
}

export default MainFrame;
//was testing out some stuff but as of now this can be stateless
//find a way to make this work for both images and for iframes or find a new way to display videos.
