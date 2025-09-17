"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";

const categories = [
  { name: "Dresses", image: "https://i.pinimg.com/1200x/50/66/cc/5066cccafc7f0c52b675df6b1fdcb3f7.jpg", description: "Casual, party, and formal dresses" },
  { name: "Tops", image: "https://i.pinimg.com/1200x/41/1a/62/411a62f0a10c281f448f20dd68cf95f9.jpg", description: "Blouses, t-shirts, and sweaters" },
  { name: "Pants", image: "https://i.pinimg.com/1200x/91/d6/f4/91d6f4518a7c984d256fb247f1360164.jpg", description: "Jeans, leggings, and trousers" },
  { name: "Jackets", image: "https://i.pinimg.com/736x/e8/f6/de/e8f6defc9dd82c621a0195e74848e29c.jpg", description: "Stylish coats and jackets" },
];

const Categories = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden ">
    
      {/* Hero Section */}
      <div className="container mx-auto px-4 relative z-10 mb-20 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <motion.div
          className="w-full md:w-1/2 h-[500px] relative rounded-3xl overflow-hidden shadow-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Image
            src="https://i.pinimg.com/1200x/04/ec/e0/04ece02ba814356cfe16564cb1a275dd.jpg"
            alt="Women's Collection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors rounded-3xl"></div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="font-montserrat text-lg font-semibold text-accent uppercase tracking-widest mb-2">
            Explore The Collections
          </h3>
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-dark-text mb-4">
            Women's Wear
          </h2>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0 mb-6">
            Discover pieces that blend timeless elegance with modern trends.
            Our curated collections are designed to inspire and empower.
          </p>
          <Link href="/shop/women">
            <button className="bg-white text-black font-bold py-3 px-10 rounded-full shadow-lg hover:scale-105 hover:bg-dark-text transition-all duration-300">
              Shop The Collection
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark-text mb-12 font-montserrat">
          Shop By Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                width={400}
                height={400}
                className="object-cover w-full h-64 md:h-72"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
              <div className="absolute bottom-4 left-4 text-gray-100 z-10">
                <h3 className="text-xl font-bold">{cat.name}</h3>
                <p className="text-sm">{cat.description}</p>
                <Link href={`/shop/${cat.name.toLowerCase()}`}>
                  <Button className="mt-2 text-white text-sm px-4 py-2 rounded-full hover:bg-dark-text transition-all" variant={"primary"}>
                    Explore
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,100%{transform:translate(0,0) scale(1);}
          33%{transform:translate(20px,-30px) scale(1.1);}
          66%{transform:translate(-20px,20px) scale(0.9);}
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Categories;
