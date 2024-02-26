"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const images = [
    "https://img.freepik.com/premium-photo/banner-bright-yellow-sunflower-blue-sky-with-clouds-big-head-sunflower-closeup-against-background-summer-blue-sky-space-copy_460542-113.jpg",
    "https://img.freepik.com/premium-photo/banner-bright-yellow-sunflower-blue-sky-with-clouds-big-head-sunflower-closeup-against-background-summer-blue-sky-space-copy_460542-113.jpg",
    "https://img.freepik.com/premium-photo/banner-bright-yellow-sunflower-blue-sky-with-clouds-big-head-sunflower-closeup-against-background-summer-blue-sky-space-copy_460542-113.jpg",
    "https://img.freepik.com/premium-photo/banner-bright-yellow-sunflower-blue-sky-with-clouds-big-head-sunflower-closeup-against-background-summer-blue-sky-space-copy_460542-113.jpg",
    // Add more image URLs as needed
  ];


  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 2.8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-full bg-gray-100 mt-0 pl-20 pt-2 pb-12 relative">
      <Slider {...sliderSettings} className="w-full h-full">
        {images.map((image, index) => (
          <div key={index} className="w-full h-full px-4 focus:outline-none">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-centercrop outline-none rounded-md mx-0" // Set margin to zero
            />
          </div>
        ))}
      </Slider>
    </div>
  
  );
}
