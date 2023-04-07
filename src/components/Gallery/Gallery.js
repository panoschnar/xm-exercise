import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Gallery.module.css";

const EventGallery = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.title}> Event Gallery </h2>
      <Slider {...settings}>
        <div className={styles.box}>
          <div className={styles.contentBox}>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.contentBox}>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.contentBox}>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.contentBox}>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.contentBox}>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.contentBox}>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.contentBox}>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.contentBox}>
          </div>
        </div>
      </Slider>{" "}
    </div>
  );
};

export default EventGallery;
