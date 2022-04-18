import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import slider1 from "../../../Images/slider1.webp";
import slider2 from "../../../Images/slides2.webp";
import slider3 from "../../../Images/slides3.jpg";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={slider1} alt="First slide" />
        <Carousel.Caption className="banner">
          <h1 className="banner-title">
            Discover The Tennis <br /> Programs We Offer You!
          </h1>
          <p>
            We Offer a Full Array of Tennis Programs <br />
            For Children Adults
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={slider2} alt="Second slide" />
        <Carousel.Caption className="banner">
          <h1 className="banner-title">Find The Perfect <br/> Best Short Opportunity! </h1>
          <p>
            We Offer a Full Array of Tennis Programs <br />
            For Children Adults
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider3} alt="Third slide" />
        <Carousel.Caption className="banner">
          <h1 className="banner-title">Get The Definition <br /> Of Professional Tennis Play! </h1>
          <p>
            We Offer a Full Array of Tennis Programs <br />
            For Children Adults
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
