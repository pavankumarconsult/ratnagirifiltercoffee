import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { IoMdQuote } from "react-icons/io";

const testimonials = [
  {
    message: "Very nice ambience and authentic coffee flavor.",
    name: "Priya S.",
    profession: "Google Review",
  },
  {
    message: "Perfect place for quick coffee breaks.",
    name: "Rahul K.",
    profession: "Google Review",
  },
  {
    message: "Loved the atmosphere and traditional taste.",
    name: "Ananya R.",
    profession: "Google Review",
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="h-[60vh] xl:h-[70vh]">
      <div className="container mx-auto h-full flex items-center">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-[400px]"
        >
          {testimonials.map((person, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="flex justify-center h-full xl:pt-14">
                <div className="max-w-[60%] text-primary">
                  <IoMdQuote className="text-6xl text-primary mb-12 mx-auto" />

                  <p className="text-2xl font-secondary text-center mb-8">
                    {person.message}
                  </p>

                  <div className="text-center">
                    <p className="text-xl font-bold mb-1">{person.name}</p>
                    <p className="text-secondary">{person.profession}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
