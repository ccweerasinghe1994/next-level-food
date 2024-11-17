"use client";
import burgerImg from "@/public/assets/burger.jpg";
import curryImg from "@/public/assets/curry.jpg";
import dumplingsImg from "@/public/assets/dumplings.jpg";
import macncheeseImg from "@/public/assets/macncheese.jpg";
import pizzaImg from "@/public/assets/pizza.jpg";
import schnitzelImg from "@/public/assets/schnitzel.jpg";
import tomatoSaladImg from "@/public/assets/tomato-salad.jpg";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];
export default function ImageSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
      {images.map((img, index) => (
        <Image
          key={index}
          className={clsx(
            `w-full h-full object-cover absolute top-0 left-0 opacity-0 
            transform scale-110 translate-x-[-1rem] rotate-[-5deg]
            transition-all duration-500 ease-in-out 
            `,
            {
              "z-[1] opacity-100 transform scale-100 translate-x-0 rotate-0":
                currentImageIndex === index,
            }
          )}
          src={img.image}
          alt={img.alt}
        />
      ))}
    </div>
  );
}
