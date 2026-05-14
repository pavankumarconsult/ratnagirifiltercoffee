"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

import Badge from "./Badge";
import Separator from "./Separator";

const data = [
  {
    imgSrc:
      "https://images.pexels.com/photos/16128085/pexels-photo-16128085.jpeg?cs=srgb&dl=pexels-akshata-bablad-70197996-16128085.jpg&fm=jpg",
    title: "South Tradition",
    description:
      "At Ratnagiri Filter Coffee, every cup reflects the authentic taste of South Indian tradition. We brew with care to preserve the deep flavor, warmth, and familiarity that make filter coffee special.",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/34939015/pexels-photo-34939015.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Fresh Aroma",
    description:
      "From freshly roasted beans to rich aromatic brewing, we serve coffee made with passion, warmth, and purity for guests who appreciate a premium yet comforting cup.",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/18617711/pexels-photo-18617711.jpeg?cs=srgb&dl=pexels-beyzaa-yurtkuran-279977530-18617711.jpg&fm=jpg",
    title: "Warm Ambience",
    description:
      "Set in Kukatpally, Hyderabad, our cafe brings together warm ambience, quick service, dine-in comfort, and takeaway ease for memorable coffee breaks all day long.",
  },
];

const About = () => {
  const scrollableSectionRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: "top top",
          end: "1800vw top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section id="about" className="overflow-hidden bg-primary">
      <div ref={scrollTriggerRef}>
        <div ref={scrollableSectionRef} className="h-screen w-[300vw] flex relative">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-screen h-screen flex flex-col justify-center items-center relative"
            >
              <div className="container mx-auto">
                <div className="flex gap-[30px] relative">
                  <div className="flex-1 flex flex-col justify-center items-center">
                    <Badge containerStyles="w-[180px] h-[180px]" />
                    <div className="max-w-[560px] text-center">
                      <h2 className="h2 text-white mb-4">
                        <span className="mr-4">{item.title.split(" ")[0]}</span>
                        <span className="text-accent">{item.title.split(" ")[1]}</span>
                      </h2>
                      <div className="mb-8">
                        <Separator />
                      </div>
                      <p className="leading-relaxed mb-16 px-8 xl:px-0">
                        {item.description}
                      </p>
                      <button className="btn">See more</button>
                    </div>
                  </div>

                  <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                    <Image
                      src={item.imgSrc}
                      fill
                      className="object-cover"
                      quality={100}
                      priority={index === 0}
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
