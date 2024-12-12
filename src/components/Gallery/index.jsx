import "./gallery.css";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Gallery = ({ imgs, children, showThumbs, radios }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex < imgs.length - 1 ? prevIndex + 1 : prevIndex;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="container-gallery" data-thumbnails={showThumbs}>
      {!showThumbs ? (
        <>
          <div className="gallery-with-content">
            <div onClick={goToPrev} className="arrow arrow-left">
              <IoIosArrowBack />
            </div>
            <div className="slide-content">{children}</div>
            <div className="slide-imgs">
              <img src={imgs[currentIndex].src} alt="slide-image" />
              <div className="indicators">
                {imgs.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${
                      currentIndex === index ? "active" : ""
                    }`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
            </div>

            <div onClick={goToNext} className="arrow arrow-right">
              <IoIosArrowForward />
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="gallery-slides">
            <div onClick={goToPrev} className="arrow arrow-left">
              <IoIosArrowBack />
            </div>
            <div className="slide-imgs">
              <img
                src={imgs[currentIndex].src}
                alt="slide-image"
                style={{ borderRadius: radios }}
              />
            </div>
            <div onClick={goToNext} className="arrow arrow-right">
              <IoIosArrowForward />
            </div>
          </div>

          <div className="gallery-thumbnails">
            {imgs.map((img, index) => (
              <div
                className={`thumbnail ${
                  currentIndex === index && "active-thumb"
                }`}
                style={{ borderRadius: radios }}
              >
                <img
                  key={index}
                  src={img.src}
                  alt={`thumb ${index + 1}`}
                  onClick={() => goToSlide(index)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
