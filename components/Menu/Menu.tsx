import Separator from "../Separator";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    imgSrc:
      "https://images.pexels.com/photos/33932441/pexels-photo-33932441.png?cs=srgb&dl=pexels-baljinder-singh-112079620-33932441.jpg&fm=jpg",
    name: "Authentic Filter Coffee",
    description: "Traditional South Indian decoction with frothy milk and bold aroma",
    price: 35,
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/10066814/pexels-photo-10066814.jpeg?cs=srgb&dl=pexels-ariefsetiawan-10066814.jpg&fm=jpg",
    name: "Strawberry Milk",
    description: "Chilled creamy strawberry drink with a smooth cafe-style finish",
    price: 70,
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/17321327/pexels-photo-17321327.jpeg?cs=srgb&dl=pexels-shameel-mukkath-3421394-17321327.jpg&fm=jpg",
    name: "Blue Curacao Mojito",
    description: "A bright minty citrus cooler served over ice for a vibrant refresh",
    price: 110,
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/34717262/pexels-photo-34717262.jpeg?cs=srgb&dl=pexels-mrjuly-34717262.jpg&fm=jpg",
    name: "Lemon Iced Tea",
    description: "Refreshing brewed tea with lemon notes and a cool summer finish",
    price: 80,
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/34939015/pexels-photo-34939015.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "Fresh Tea",
    description: "Comforting hot tea brewed fresh to order for any time of day",
    price: 20,
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/22222983/pexels-photo-22222983.jpeg?cs=srgb&dl=pexels-lucaspalito-22222983.jpg&fm=jpg",
    name: "Cold Coffee",
    description: "Smooth chilled coffee blended for a creamy cafe-style refreshment",
    price: 90,
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/12777191/pexels-photo-12777191.jpeg?cs=srgb&dl=pexels-matreding-12777191.jpg&fm=jpg",
    name: "Classic Mojito",
    description: "Sparkling mint and lime cooler with a crisp, refreshing finish",
    price: 85,
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/34939015/pexels-photo-34939015.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "Masala Chai",
    description: "Spiced Indian tea with fragrant warmth and a balanced sweetness",
    price: 30,
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/10066814/pexels-photo-10066814.jpeg?cs=srgb&dl=pexels-ariefsetiawan-10066814.jpg&fm=jpg",
    name: "Rose Milk",
    description: "A chilled rosy milk beverage that is light, sweet, and nostalgic",
    price: 60,
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/22222983/pexels-photo-22222983.jpeg?cs=srgb&dl=pexels-lucaspalito-22222983.jpg&fm=jpg",
    name: "Chocolate Shake",
    description: "Rich cocoa shake with a creamy texture and cafe-style indulgence",
    price: 95,
  },
] as const;

const Menu = () => {
  return (
    <section id="menu" className="pt-12 pb-16 xl:pt-16 xl:pb-36">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center">Our Menu</h2>
          <div className="mb-4">
            <Separator bg="accent" />
          </div>
          <p className="text-center max-w-[620px] mx-auto">
            South Indian coffee classics, coolers, and cafe favorites prepared fresh
            every day for dine-in and takeaway guests in Kukatpally.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12 xl:gap-24">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
            {menuItems.map((item, index) => {
              const { name, description, price, imgSrc } = item;

              return (
                <MenuItem
                  key={index}
                  name={name}
                  description={description}
                  price={price}
                  imgSrc={imgSrc}
                />
              );
            })}
          </div>
          <button className="btn">View full menu</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
