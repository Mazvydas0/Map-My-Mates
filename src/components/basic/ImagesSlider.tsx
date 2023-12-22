"use client";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useEffect, useRef } from "react";

export default function ImageSlider({ images }: any) {
  const initialSlidesToShow = images?.length > 2 ? 3 : images?.length;
  //Math.min(images?.length, 3)
  let settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: initialSlidesToShow,
    arrows: false,
    dots: true,
    swipeToSlide: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slider = useRef<Slider>(null);

  function scroll(e: WheelEvent) {
    if (slider === null) return 0;
    if (slider.current) {
      e.deltaY > 0 ? slider.current.slickNext() : slider.current.slickPrev();
    }
  }
  useEffect(() => {
    window.addEventListener("wheel", scroll, true);
    return () => {
      window.removeEventListener("wheel", scroll, true);
    };
  }, []);

  return (
    <div className="pt-10 mx-5 lg:mx-14">
      {images && images?.length > 0 && (
        <Slider ref={slider} {...settings}>
          {images?.map((image: any, index: any) => (
            <div key={index}>
              <Image
                className="object-cover"
                width={180}
                height={180}
                alt=""
                src={image}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
