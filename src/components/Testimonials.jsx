import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { testimonials } from "../constant";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SubHeading from "./SubHeading";

const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 3,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 1,
            spacing: 20,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Button click handler
  const handleNextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next(); // Move to the next slide
    }
  };

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev(); // Move to the prev slide
    }
  };
  return (
    <div className="py-[5rem]">
      <div className="wrapper flex flex-col items-start sm:items-center gap-5">
        {/* <SubHeading heading="Testimonials" /> */}
        <h2
          className="heading-2 max-w-[60rem] mx-auto text-primary_text mb-2 text-start sm:text-center"
          data-aos="fade-up"
        >
          Testimonials
        </h2>
        <div className="flex items-center gap-4 w-full">
          <div data-aos="fade-up">
            <button
              className="text-white w-[2.5rem] h-[2.5rem] hidden md:flex items-center justify-center rounded-full p-2 hover:bg-primary bg-secondary text-5xl transition-all duration-300"
              onClick={handlePrevClick}
              aria-label="Previous slide"
            >
              <ArrowLeft size={32} />
            </button>
          </div>
          <div ref={sliderRef} className="keen-slider" data-aos="fade-up">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="keen-slider__slide text-center justify-between text-primary_text p-5 bg-primary/10 rounded-xl flex flex-col gap-4"
              >
                <p className="italic text-balance">{item.desc}</p>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex flex-col items-center gap-1 h-full">
                    <img
                      loading="lazy"
                      src={item.img}
                      alt={item.name}
                      className="h-[3rem] w-[3rem] rounded-full object-cover border-2 border-primary"
                    />
                    <p className="font-medium mt-1">{item.name}</p>
                    <p className="text-sm">{item.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div data-aos="fade-up">
            <button
              className="text-white w-[2.5rem] h-[2.5rem] hidden md:flex items-center justify-center rounded-full p-2 hover:bg-primary bg-secondary text-5xl transition-all duration-300"
              onClick={handleNextClick}
              aria-label="Next slide"
            >
              <ArrowRight size={32} />
            </button>
          </div>
        </div>
        <div data-aos="fade-up" className="flex items-center gap-5 self-center">
          <button
            className="text-white w-[2.5rem] h-[2.5rem] md:hidden flex items-center justify-center rounded-full p-2 bg-secondary text-5xl transition-all duration-300"
            onClick={handlePrevClick}
            aria-label="Previous slide"
          >
            <ArrowLeft size={32} />
          </button>
          <button
            className="text-white w-[2.5rem] h-[2.5rem] md:hidden flex items-center justify-center rounded-full p-2 bg-secondary text-5xl transition-all duration-300"
            onClick={handleNextClick}
            aria-label="Next slide"
          >
            <ArrowRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
