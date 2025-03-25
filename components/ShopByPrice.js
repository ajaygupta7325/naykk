const priceCategories = [
    { label: "Under", price: "₹999" },
    { label: "Under", price: "₹2999" },
    { label: "Under", price: "₹4999" },
    { label: "Premium Gifts", price: null, premium: true },
  ];
  
  export default function ShopByPrice() {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold mb-6">Shop By Price</h2>
        <div className="flex justify-center gap-6 overflow-x-auto px-4">
          {priceCategories.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-40 h-40 p-4 rounded-2xl shadow-md cursor-pointer transition-transform duration-300 
                ${
                  item.premium
                    ? "bg-gradient-to-r from-yellow-400 to-orange-300 text-purple-700 font-bold border-2 border-yellow-500"
                    : "bg-pink-50 border border-pink-300"
                } hover:scale-105`}
            >
              <p className="text-lg font-semibold">{item.label}</p>
              {item.price ? (
                <p className="text-xl font-bold text-pink-600">{item.price}</p>
              ) : (
                <p className="text-2xl">🎁</p>
              )}
              <div className="mt-2 text-pink-600 text-lg">➜</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  