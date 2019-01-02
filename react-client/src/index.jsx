import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Images from "./components/images.jsx";
import Video from "./components/video.jsx";
import MainImage from "./components/mainImage.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      images: [],
      videoUrl: null,
      currentListing: null
    };
    this.populateImages = this.populateImages.bind(this);
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  populateImages() {
    axios
      .get(`/listing/${this.state.currentListing}`)
      .then(response => {
        console.log(response.data);
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
          videoUrl: response.data.videoUrl
        }); //or do conditional rendering based on values!!!!
      })
      .catch(err => {
        console.log("Error populating images in client: ", err);
      });
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
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
          <Images images={this.state.images}/>
          <Video video={this.state.videoUrl}/>
        </div>
        <MainImage />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
