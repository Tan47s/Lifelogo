import { useState } from "react";
import w1 from "./assets/workshop/w1.jpeg";

const images = [w1];

export default function Workshop() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20">
      
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-4xl px-5 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[#123f43] md:text-5xl lg:text-6xl">
          Our Workshop
        </h1>

        <p className="mt-4 text-base text-gray-500 md:text-lg">
          A few moments of our counselling and office sessions
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="h-[350px] w-full sm:h-[450px] md:h-[550px] lg:h-[650px]">
          <img
            src={images[current]}
            alt={`Workshop session ${current + 1}`}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Previous */}
        <button
          onClick={prevSlide}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2
                     items-center justify-center rounded-full
                     bg-white/85 text-2xl text-[#123f43] shadow-lg
                     backdrop-blur-sm transition hover:scale-110 hover:bg-white
                     md:left-7 md:h-14 md:w-14"
        >
          &#10094;
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          aria-label="Next image"
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2
                     items-center justify-center rounded-full
                     bg-white/85 text-2xl text-[#123f43] shadow-lg
                     backdrop-blur-sm transition hover:scale-110 hover:bg-white
                     md:right-7 md:h-14 md:w-14"
        >
          &#10095;
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/60 hover:bg-white/90"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}