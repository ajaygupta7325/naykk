"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const categories = [
  { name: "All" },
  { name: "Rings" },
  { name: "Necklaces & Pendants" },
  { name: "Bracelets" },
  { name: "Earrings" },
  { name: "Anklets" },
  { name: "Other Categories" },
];

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 text-pink-500 font-semibold"
      >
        <span>Shop by Category</span>
        <ChevronDown size={18} />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg border rounded-md z-50">
          <ul className="py-2">
            {categories.map((cat, index) => (
              <li
                key={index}
                className="flex justify-between px-4 py-2 hover:bg-pink-100 cursor-pointer"
              >
                {cat.name} {index !== 0 && <ChevronRight size={16} />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
