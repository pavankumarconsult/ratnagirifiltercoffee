import Image from "next/image";

type PropsType = {
  containerStyles: string;
};

const Badge = ({ containerStyles }: PropsType) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image
        src="/assets/ratnagiri-logo.jpg"
        fill
        alt="Ratnagiri Filter Coffee emblem"
        className="object-contain rounded-full"
      />
    </div>
  );
};

export default Badge;
