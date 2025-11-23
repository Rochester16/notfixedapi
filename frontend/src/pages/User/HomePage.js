import React, { useState } from "react";
import Footer from "../../components/footer.js";
import "../../styles/style.css";

const HomePage = () => {
  const [cartCount, setCartCount] = useState(0);

  const products = {
    dailyDiscovery: [
      {
        id: 1,
        name: "Eternal Twist Couple Wedding Ring",
        price: 4299,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
        tag: "New"
      },
      {
        id: 2,
        name: "Midnight Faith Layered Necklace",
        price: 1299,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
        tag: "Hot"
      },
      {
        id: 3,
        name: "Amber Forge Ring",
        price: 4299,
        image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=80",
        tag: "Hot"
      },
      {
        id: 4,
        name: "TriLuxe Stud Earrings",
        price: 1299,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
        tag: "Hot"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8]">

      {/* ---------------- HERO ---------------- */}
      <section className="relative h-[500px] bg-gradient-to-r from-[#F5E6D3] to-[#E8D5C4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="w-1/2">
            <p className="text-[#8B7355] text-sm tracking-widest mb-2">AUREVRA JEWELRY</p>
            <h1 className="text-5xl font-serif text-[#6B5438] mb-4 leading-tight">
              Discover Timeless Elegance
            </h1>
            <p className="text-[#8B7355] text-lg mb-8 tracking-wide">
              LET YOURS SHINE WITH AUREVRA JEWELRY.
            </p>

            <button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-3 rounded transition">
              Shop Now
            </button>
          </div>

          <div className="w-1/2 flex justify-end">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80"
              alt="Jewelry"
              className="h-96 object-contain"
            />
          </div>
        </div>
      </section>

      {/* ---------------- DAILY DISCOVERY ---------------- */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-px w-32 bg-[#D4AF37]"></div>
              <h2 className="text-4xl font-serif text-[#6B5438]">DAILY DISCOVERY</h2>
              <div className="h-px w-32 bg-[#D4AF37]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.dailyDiscovery.map((product) => (
              <div
                key={product.id}
                className="bg-white border-2 border-[#E8D5C4] rounded-lg overflow-hidden hover:shadow-lg transition group"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-4 right-4 bg-[#D4AF37] text-white text-xs px-3 py-1 rounded">
                    {product.tag}
                  </span>
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-[#6B5438] font-medium mb-2 min-h-[3rem] flex items-center justify-center">
                    {product.name}
                  </h3>

                  <p className="text-[#8B7355] font-semibold text-lg mb-4">
                    ₱ {product.price.toLocaleString()}
                  </p>

                  <button
                    onClick={() => setCartCount((prev) => prev + 1)}
                    className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-6 py-2 rounded text-sm transition w-full"
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default HomePage;
