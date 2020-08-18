import React, { Component } from "react";
import "./ImageSlide.css";
import { Icon } from "semantic-ui-react";
import Images from "../SlideImages.js";

class ImageSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
    };
    this.length = Images.length;
  }
  imgChange = (symbol) => {
    let { imgIndex } = this.state;
    let nextIndex;
    if (symbol === "plus") {
      nextIndex = imgIndex + 1;
      if (this.length === nextIndex) {
        nextIndex = 0;
      }
    } else {
      nextIndex = imgIndex - 1;
      if (nextIndex < 0) {
        nextIndex = this.length - 1;
      }
    }

    this.setState({
      imgIndex: nextIndex,
    });
  };
  render() {
    const slideImages = Images;
    let { imgIndex } = this.state;
    return (
      <div className="slider-container">
        {/* <SimpleImageSlider width={960} height={500} images={slideImages} /> */}
        <img src={slideImages[imgIndex].imgUrl} alt="슬라이드 사진" />
        <Icon
          name="angle right"
          size="huge"
          className="angle-right-icon"
          onClick={() => this.imgChange("plus")}
        ></Icon>
        <Icon
          name="angle left"
          size="huge"
          className="angle-left-icon"
          onClick={() => this.imgChange("minus")}
        ></Icon>
      </div>
    );
  }
}

export default ImageSlide;
