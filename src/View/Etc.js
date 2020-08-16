import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import "./Etc.css";
class Etc extends Component {
  render() {
    return (
      <div className="container">
        <Image.Group size="large">
          <Image
            className="container-image"
            verticalAlign="middle"
            src="etc_image/suzy1.png"
          />
          <Image
            className="container-image"
            verticalAlign="middle"
            src="etc_image/suzy2.png"
          />
          <Image
            className="container-image"
            verticalAlign="middle"
            src="etc_image/suzy3.png"
          />
        </Image.Group>
      </div>
    );
  }
}

export default Etc;
