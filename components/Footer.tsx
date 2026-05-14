import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaStar } from "react-icons/fa";

const links = [
  { href: "#home", name: "Home" },
  { href: "#explore", name: "Explore" },
  { href: "#about", name: "About" },
  { href: "#menu", name: "Menu" },
  { href: "#contact", name: "Contact" },
];

const socialIcons = [
  {
    href: "https://www.instagram.com/ratnagirifiltercoffee/",
    label: "Instagram",
    icon: <FaInstagram />,
    external: true,
  },
  {
    href: "tel:+916303719920",
    label: "Call Ratnagiri Filter Coffee",
    icon: <FaPhoneAlt />,
    external: false,
  },
  {
    href: "https://maps.google.com/",
    label: "Google Maps",
    icon: <FaMapMarkerAlt />,
    external: true,
  },
  {
    href: "#reviews",
    label: "Customer reviews",
    icon: <FaStar />,
    external: false,
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="bg-footer bg-cover bg-no-repeat pt-16 relative">
      <div className="absolute w-full h-full bg-black/[0.90] z-10 top-0" />
      <div className="container mx-auto z-20 relative">
        <div className="flex flex-col items-center justify-center gap-14">
          <Link href="/" className="relative w-[120px] h-[50px] mx-auto">
            <Image
              src="/assets/ratnagiri-logo.jpg"
              fill
              alt="Ratnagiri Filter Coffee logo"
              className="object-contain"
            />
          </Link>

          <nav className="flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center">
            {links.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="uppercase text-white tracking-widest hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <ul className="flex text-white text-xl gap-4">
            {socialIcons.map((social, index) => (
              <Link
                key={`social-${index}`}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noreferrer" : undefined}
                aria-label={social.label}
                className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
              >
                {social.icon}
              </Link>
            ))}
          </ul>

          <div className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6">
            <p>&copy; {new Date().getFullYear()} Ratnagiri Filter Coffee. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
