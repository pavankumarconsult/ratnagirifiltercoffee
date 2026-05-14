import Image from "next/image";

import Badge from "./Badge";
import Separator from "./Separator";

const openingHoursImage =
  "https://images.pexels.com/photos/18617711/pexels-photo-18617711.jpeg?cs=srgb&dl=pexels-beyzaa-yurtkuran-279977530-18617711.jpg&fm=jpg";

const OpeningHours = () => {
  return (
    <section id="contact" className="flex bg-primary h-[60vh] xl:h-[80vh]">
      <div className="hidden relative xl:flex flex-1 justify-center items-center">
        <div className="w-full h-full absolute z-40 top-0 bg-black/60" />
        <Image
          src={openingHoursImage}
          fill
          alt="Warm premium cafe interior"
          quality={100}
          priority
          className="object-cover"
        />
        <Badge containerStyles="w-[320px] h-[320px] absolute z-40" />
      </div>

      <div className="flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative">
        <div className="w-full h-full absolute top-0 bg-black/[0.85] z-10" />

        <div className="z-20 flex flex-col items-center justify-center">
          <h2 className="h2 text-white mb-4">Opening Hours</h2>
          <Separator bg="accent" />

          <div className="mt-12 relative w-[300px] h-[220px] xl:w-[470px] xl:h-[280px]">
            <Image
              src="/assets/opening-hours/program-badge.svg"
              fill
              quality={100}
              priority
              alt="Ratnagiri Filter Coffee opening hours and contact details"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
