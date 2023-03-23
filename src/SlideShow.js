import React, { useState, useEffect } from "react";
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideShow = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context("./image", false, /\.(png|jpe?g|svg)$/));
    setImages(images);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
//   const mystyle = {
//     backgroundImage: `url(${image})`,
//     color: "white",
//     backgroundColor: "DodgerBlue",
//     padding: "10px",
//     fontFamily: "Arial"
//   };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} >
          <div style={{ backgroundImage:`url(${process.env.PUBLIC_URL + image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

        
        }}>

            <img className="image" src={image} alt={`Image ${image}`} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SlideShow;