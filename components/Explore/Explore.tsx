import Image from "next/image";

import ExploreItem from "./ExploreItem";

const exploreImage =
  "https://images.pexels.com/photos/33932441/pexels-photo-33932441.png?cs=srgb&dl=pexels-baljinder-singh-112079620-33932441.jpg&fm=jpg";

const Explore = () => {
  return (
    <section id="explore" className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen">
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        <div className="w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
          <div className="flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            <ExploreItem
              itemCSS="xl:text-right xl:items-end"
              icon="coffee-1.svg"
              text={{
                title: "Authentic Filter Kaapi",
                description:
                  "Freshly brewed South Indian filter coffee with deep decoction, silky froth, and a comforting traditional finish.",
              }}
            />
            <ExploreItem
              itemCSS="xl:text-right xl:items-end"
              icon="coffee-2.svg"
              text={{
                title: "Warm Cafe Ambience",
                description:
                  "A cozy premium setting made for quick coffee breaks, relaxed conversations, and everyday moments with family and friends.",
              }}
            />
          </div>

          <div className="hidden xl:flex justify-center">
            <div className="relative w-[322px] h-[580px]">
              <Image
                src={exploreImage}
                fill
                alt="Frothy South Indian filter coffee"
                className="object-cover"
                quality={100}
                priority
                data-scroll
                data-scroll-speed="0.1"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-around text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            <ExploreItem
              itemCSS="xl:text-left items-start"
              icon="coffee-3.svg"
              text={{
                title: "Freshly Brewed Daily",
                description:
                  "From early-morning coffee runs to late-evening refreshments, every drink is prepared fresh throughout the day.",
              }}
            />
            <ExploreItem
              itemCSS="xl:text-left items-start"
              icon="coffee-4.svg"
              text={{
                title: "Dine-In & Takeaway",
                description:
                  "Enjoy your favorites in-store or take them along, with quick service designed for the pace of Kukatpally life.",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
