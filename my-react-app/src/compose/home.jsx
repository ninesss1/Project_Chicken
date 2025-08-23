import React, { useRef, useEffect, useState } from "react";
import "../css/home.css";
import img_1 from "../assets/fried_1.jpg";
// import img_2 from "../assets/picTest.png"; // ภาพ แสดงทดสอบ

const Home = () => {
  
  const img = [img_1, img_1, img_1, img_1, img_1, img_1];
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % img.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [img.length]);

  // Scroll to current image
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const child = container.children[current];
      if (child) {
        child.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [current]);

  return (
    <>
      <div className="chicken-carousel-outer">
        <div
          className="chicken-carousel"
          ref={scrollRef}
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            overflowY: "hidden",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {img.map((src, index) => (
            <div className="chicken-carousel-item" key={index}>
              <img
                src={src}
                alt={`Fried Chicken ${index + 1}`}
                className="chicken-carousel-img"
              />
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {img.map((_, idx) => (
            <span
              key={idx}
              className={`carousel-dot${
                idx === current ? " active" : ""
              }`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
      {/* วาง BottomNav ไว้นอก carousel-outer */}
      {/* <BottomNav /> หรือ <div className="bottomnav">...</div> */}
    </>
  );
};

export default Home;