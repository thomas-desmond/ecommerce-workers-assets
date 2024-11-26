import React from "react";
import { Search, ShoppingBag, User } from "lucide-react";
import ProductCard from "@/app/ProductCard";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1059.99,
    category: "Technology",
    image:
      "https://imagedelivery.net/llMDWXFPgX44M9elMfQ9XA/393defea-8ee6-46c7-971f-df55f24a7700/public",
  },
  {
    id: 2,
    name: "Television",
    price: 2889.99,
    category: "Technology",
    image:
      "https://imagedelivery.net/llMDWXFPgX44M9elMfQ9XA/f2cf1abd-3995-4b8c-0c24-99b82e4aac00/public",
  },
  {
    id: 3,
    name: "Keyboard",
    price: 129.99,
    category: "Accessories",
    image:
      "https://imagedelivery.net/llMDWXFPgX44M9elMfQ9XA/4e290265-b01d-43d9-0b49-b891fcdaf100/public",
  },
  {
    id: 4,
    name: "Watch",
    price: 199.99,
    category: "Accessories",
    image:
      "https://imagedelivery.net/llMDWXFPgX44M9elMfQ9XA/36b74004-c669-4572-b505-6384c000bd00/public",
  },
];

function App() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1674286388329-837db73581c3?auto=format&fit=crop&q=80&w=2000"
          alt="Hero"
          className="w-full h-full object-cover opacity-70"
          width={2000}
          height={1125}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-blue-200 bg-opacity-80 rounded-lg p-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                Curated Collection
              </h2>
              <p className="text-xl text-gray-800 mb-8">
                Discover unique products handpicked by our experts
              </p>
            </div>
            <button className="bg-white text-gray-900 mt-2 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
