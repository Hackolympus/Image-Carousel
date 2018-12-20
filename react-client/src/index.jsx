import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //state
    };
    //function binding
  }

  componentDidMount() {
    //on start calls
  }

  render() {
    return (
      <div>
          hi
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
