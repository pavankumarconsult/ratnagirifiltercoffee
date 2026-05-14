"use client";

import Image from "next/image";
import Link from "next/link";

import Badge from "./Badge";
import Separator from "./Separator";

const heroImage =
  "https://images.pexels.com/photos/16128085/pexels-photo-16128085.jpeg?cs=srgb&dl=pexels-akshata-bablad-70197996-16128085.jpg&fm=jpg";

const Hero = () => {
  return (
    <section id="home" className="h-[80vh] xl:h-screen relative text-white">
      <div className="bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.93]" />
      <Image
        src={heroImage}
        fill
        alt="Authentic South Indian filter coffee served in brass tumblers"
        className="object-cover"
        quality={100}
        priority
      />

      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
        <div
          data-scroll
          data-scroll-speed="0.4"
          className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full"
        >
          <div className="flex flex-col items-center">
            <Badge containerStyles="hidden xl:flex xl:w-[180px] xl:h-[180px]" />
            <h1 className="h1 text-white">
              Ratnagiri <span className="text-accent">Filter Coffee</span>
            </h1>
          </div>

          <Separator />

          <p className="lead font-light max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-4">
            Authentic South Indian Filter Coffee Experience with rich aroma, fresh
            brewing, and a warm cafe ambience in Kukatpally.
          </p>

          <Link href="#menu" className="btn">
            See menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
