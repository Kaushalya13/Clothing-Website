"use client";

import ProductCard from "@/components/ProductCard";

const products = [
  { imgURL: 'https://i.pinimg.com/1200x/3e/23/21/3e23216d49ade66808caf31ee0291900.jpg', category: 'Tops', name: 'Elegant Silk Blouse', price: '$89.99', discount: '10%' },
  { imgURL: 'https://i.pinimg.com/736x/aa/c3/4c/aac34c11a905976f927ed283164e60f4.jpg', category: 'Pants', name: 'Classic Tailored Trousers', price: '$120.00', discount: '15%' },
  { imgURL: 'https://i.pinimg.com/1200x/8c/8c/3f/8c8c3f72ad48b3f41025d36956e446bc.jpg', category: 'Dresses', name: 'Summer Linen Dress', price: '$155.00', discount: '20%' },
  { imgURL: 'https://i.pinimg.com/1200x/f0/40/4e/f0404e1292338cd93b2a47f531c63592.jpg', category: 'Frock', name: 'Modern Frock', price: '$95.50', discount: '5%' },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24 bg-light-gray relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full bg-purple-400/30 blur-3xl opacity-60 animate-blob"></div>
      <div className="pointer-events-none absolute -bottom-40 -right-28 h-96 w-96 rounded-full bg-pink-400/30 blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-dark-text mb-4 font-montserrat">
          New Arrivals
        </h2>
        <p className="text-center text-gray-600 mb-12">Check out our latest collection of must-have pieces.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
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

export default FeaturedProducts;
