import Image from "next/image";

const giftingCategories = [
  { name: "Mother", img: "/mother.png" },
  { name: "Brother", img: "/brother.png" },
  { name: "Sister", img: "/sister.png" },
  { name: "Husband", img: "/husband.png" },
  { name: "Wife", img: "/wife.png" },
  { name: "Friends", img: "/friends.png" },
];

export default function GiftingGuide() {
  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-semibold mb-6">Gifting Guide</h2>
      <div className="flex justify-center gap-6 overflow-x-auto px-4">
        {giftingCategories.map((category, index) => (
          <div key={index} className="flex flex-col items-center min-w-[150px]">
            <div className="w-32 h-44 relative">
              <Image
                src={category.img}
                alt={category.name}
                layout="fill"
                className="rounded-t-full object-cover"
              />
            </div>
            <p className="text-lg font-medium mt-2">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
