import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tuletornen",
    description: "Sweden",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Los Angeles",
    description: "Worm's-eye view",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600540984005-c7f3a641fbe5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tehran",
    description: "White and gray round",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1560419450-a53fe3b90211?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Copenhagen",
    description: "Axel Towers",
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        zIndex: 0,
      };
    },
  };

  return (
    <div className="relative w-full h-screen mx-auto">
      <div className="overflow-hidden relative h-full">
        <AnimatePresence initial={false} custom={direction}>
          {slides.map(
            (slide, index) =>
              index === currentIndex && (
                <motion.div
                  key={slide.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: {
                      type: "spring",
                      stiffness: 100,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: { duration: 0.8 },
                  }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center  p-4">
                    <h2 className="text-4xl md:text-7xl text-yellow-500 font-bold">
                      {slide.title}
                    </h2>
                    <p className="mt-2 text-white text-lg md:text-xl">
                      {slide.description}
                    </p>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl p-2 bg-black bg-opacity-50 z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl p-2 bg-black bg-opacity-50 z-10"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
