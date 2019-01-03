import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Images from "./components/images.jsx";
import Video from "./components/video.jsx";
import MainFrame from "./components/mainFrame.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      images: [],
      videoUrl: null,
      currentListing: null,
      currentSelect: null,
      currentSelectType: "image"
    };
    this.populateImages = this.populateImages.bind(this);
    this.getRandomNumber = this.getRandomNumber.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  populateImages() {
    axios
      .get(`/listing/${this.state.currentListing}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          images: [
            response.data.image1Url,
            response.data.image2Url,
            response.data.image3Url,
            response.data.image4Url,
            response.data.image5Url,
            response.data.image6Url
            //iterate through the response data instead
          ],
          videoUrl: response.data.videoUrl,
          currentSelect: response.data.image1Url
        }); //or do conditional rendering based on values!!!!
      })
      .catch(err => {
        console.log("Error populating images in client: ", err);
      });
  }

  getRandomNumber() { //to get a random listing 1-100, not to be used in production
    return Math.floor(Math.random() * 100) + 1;
  }

  onMouseOver(e) {
    this.setState({
      currentSelect: e.target.src
    });
    if (e.target.id === "video-thumbnail") {
      this.setState({currentSelectType: "video", currentSelect: this.state.videoUrl});
    } else if(e.target.tagName === "IMG") {
      this.setState({currentSelectType: "image"});
    }
  }

  componentDidMount() {
    this.setState({ currentListing: this.getRandomNumber() }, () => {
      this.populateImages();
    });
  }

  render() {
    return (
      <div id="image-carousel">
        <div id="thumbnail-bar">
          <Images images={this.state.images} onMouseOver={this.onMouseOver}/>
          <Video video={this.state.videoUrl} onMouseOver={this.onMouseOver}/>
        </div>
        <MainFrame currentSelect={this.state.currentSelect} currentSelectType={this.state.currentSelectType}/>
        <div id="myModal" class="modal">
          <span class="close">&times;</span>
          <img class="modal-content" id="img01"></img>
          <div id="caption"></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));