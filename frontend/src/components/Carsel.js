import React, { useState, useEffect } from "react";

import image1 from "./images/carsole3.jpg";
import image2 from "./images/Home_img.jpg";
import image3 from "./images/carsole2.jpg";

// const images = [
//   image2,
//   image1,
//   image3,
// ];

function Carsel() {
  //   const [currentIndex, setCurrentIndex] = useState(0);

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       const newIndex = (currentIndex + 1) % images.length;
  //       setCurrentIndex(newIndex);
  //     }, 5000);

  //     return () => clearInterval(intervalId);
  //   }, [currentIndex, images.length]);

  //   const handleSelect = (selectedIndex, event) => {
  //     setCurrentIndex(selectedIndex);
  //   };

  return (
    // <div className="App">
    //   <Carousel
    //     activeIndex={currentIndex}
    //     onSelect={handleSelect}
    //     className="md-2"
    //   >
    //     {images.map((image, index) => (
    //       <Carousel.Item key={index}>
    //         <img
    //           className="d-block w-100"
    //           src={image}
    //           alt={`Image ${index + 1}`}
    //           style={{ width: '600px', height: '500px' }}
    //         />
    //         <Carousel.Caption>
    //           <h3 className="carosil">YOUR JOURNEY TO WELLNESS BEGINS AT HERE</h3>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //     ))}
    //   </Carousel>
    // </div>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={image2} alt="First slide" width='600px' height='500px' />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={image1} alt="Second slide" width='600px' height='500px' />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={image3} alt="Third slide" width='600px' height='500px' />
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carsel;