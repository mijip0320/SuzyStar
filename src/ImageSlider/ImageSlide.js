//메인 페이지에 ImageSlider

import React, { Component } from "react";
import "./ImageSlide.css";
import { Icon } from "semantic-ui-react";
import Images from "../SlideImages.js";

class ImageSlide extends Component {
  constructor(props) {
    super(props);

    //Slide 이미지 변화를 위해 index값을 state로 유지
    this.state = {
      imgIndex: 0,
    };
    //image의 총 길이(예외처리를 위한 변수)
    this.length = Images.length;
  }

  //각 버튼에 해당하는 이미지 변화 함수
  imgChange = (symbol) => {
    let { imgIndex } = this.state;
    let nextIndex;

    //오른쪽 버튼을 눌렀을 때
    if (symbol === "plus") {
      nextIndex = imgIndex + 1;
      if (this.length === nextIndex) {
        nextIndex = 0;
      }
    } 
    //왼쪽 버튼을 눌렀을 때
    else {
      nextIndex = imgIndex - 1;
      if (nextIndex < 0) {
        nextIndex = this.length - 1;
      }
    }

    //계산된 index값 state로 전달
    this.setState({
      imgIndex: nextIndex,
    });
  };
  render() {
    //JSON형식으로 저장한 Image파일 리스트 저장
    const slideImages = Images;
    let { imgIndex } = this.state;
    return (
      <div className="slider-container">
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
