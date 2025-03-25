"use client"
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
    { name: "Pendants", img: "/pendants.png" },
    { name: "Rings", img: "/rings.png" },
    { name: "Earrings", img: "/earrings.png" },
    { name: "Bracelets", img: "/bracelets.png" },
    { name: "Sets", img: "/sets.png" },
    { name: "Anklets", img: "/anklets.png" },
    { name: "Personalised", img: "/personalised.png" },
    { name: "Men's", img: "/mens.png" },  { name: "Pendants", img: "/pendants.png" },
    { name: "Rings", img: "/rings.png" },
    { name: "Earrings", img: "/earrings.png" },
    { name: "Bracelets", img: "/bracelets.png" },
    { name: "Sets", img: "/sets.png" },
    { name: "Anklets", img: "/anklets.png" },
    { name: "Personalised", img: "/personalised.png" },
    { name: "Men's", img: "/mens.png" },  { name: "Pendants", img: "/pendants.png" },
    { name: "Rings", img: "/rings.png" },
    { name: "Earrings", img: "/earrings.png" },
    { name: "Bracelets", img: "/bracelets.png" },
    { name: "Sets", img: "/sets.png" },
    { name: "Anklets", img: "/anklets.png" },
    { name: "Personalised", img: "/personalised.png" },
    { name: "Men's", img: "/mens.png" },
];

export default function CategorySlider() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full py-4">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <div
        ref={sliderRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide px-8"
      >
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center min-w-[100px]">
            <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center">
              <Image src={cat.img} alt={cat.name} width={60} height={60} className="rounded-full" />
            </div>
            <p className="text-sm mt-2">{cat.name}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
