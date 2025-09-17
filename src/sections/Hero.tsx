"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Star, Truck, RefreshCw, Sparkles } from "lucide-react";

type ButtonProps = {
  className?: string;
  size?: 'sm' | 'lg';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  className = '',
  size = 'sm',
  variant = 'primary',
  children,
}) => {
  const sizeClasses: Record<'sm' | 'lg', string> = {
    sm: 'px-8 py-3',
    lg: 'px-10 py-4',
  };

  const variantClasses: Record<'primary' | 'secondary', string> = {
    primary: 'bg-pink-600 hover:bg-pink-700 text-white',
    secondary: 'bg-neutral-200 hover:bg-neutral-300 text-black',
  };

  const baseClasses = 'rounded-full font-medium transition-colors duration-300';

  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- Main Hero Component ---
export default function Hero() {
  // Image paths are replaced with placeholders to resolve build errors.
  const img01 = "https://i.pinimg.com/736x/c6/68/14/c668148a5bf72e9c8e679834dcaf64b1.jpg?";
  const img02 = "https://i.pinimg.com/1200x/73/8e/fa/738efa4ea9c63ff7f50ee14635134eb3.jpg";
  const img03 = "https://i.pinimg.com/1200x/3d/ea/7b/3dea7bddcf7f8c39310bfcbc04390ad5.jpg";
  return (
    <section
      className="relative bg-neutral-950 text-white -top-17 overflow-hidden py-20 lg:py-3.7"
    >
      {/* Background glow accents */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-purple-600/30 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -bottom-40 -right-28 h-96 w-96 rounded-full bg-pink-600/30 blur-3xl opacity-70" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12 px-6">
        
        {/* LEFT CONTENT - UPDATED with lg:pl-12 to add space on the left side */}
        <div className="lg:col-span-5 text-center lg:text-left z-10 relative lg:pl-12">
          
          {/* Vertical accent line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full hidden lg:block" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium text-sm"
          >
            New 2025 Collection
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Elevate <br /> your style!
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-6 text-lg text-neutral-300 max-w-lg"
          >
            Discover our 2025 collection-crafted for comfort, confidence, and timeless elegance. Perfect for every occasion.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
          >
            <Button size="sm" variant="primary">
              Shop Now
            </Button>
            <Button size="sm" variant="secondary">
              View Collection
            </Button>
          </motion.div>

          {/* Trust row with reviews */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-12 flex items-center justify-center lg:justify-start gap-2 text-sm text-neutral-300"
          >
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>Rated 4.8/5 by 2,000+ customers</span>
          </motion.div>

          {/* Benefits row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-neutral-200"
          >
            <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Truck className="w-4 h-4 text-pink-400" /> Free shipping over $50
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <RefreshCw className="w-4 h-4 text-purple-400" /> 30-day returns
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Sparkles className="w-4 h-4 text-yellow-400" /> New arrivals weekly
            </span>
          </motion.div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-7 relative h-[600px] w-full mt-12 lg:mt-0">
          {/* Back Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="absolute -top-4 right-0 w-[55%] h-[80%] shadow-2xl rounded-lg overflow-hidden"
          >
            <img
              src={img02}
              alt="Fashion model in a stylish coat"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Middle Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="absolute bottom-10 left-10 w-[45%] h-[80%] shadow-2xl rounded-lg overflow-hidden z-10"
          >
            <img
              src={img01}
              alt="Fashion model posing outdoors"
              className="w-full h-full object-cover opacity-20 hover:opacity-100 transition-opacity duration-500"
            />
          </motion.div>

          {/* Front Detail Image */}
          <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
            animate={{
                y: [0, -10, 0],       // move up 10px then back
                opacity: [1, 1, 1], 
                scale: [1, 1.05, 1]   // always visible
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="absolute bottom-1/3 translate-y-1/2 left-[35%] w-[30%] h-[40%] shadow-2xl rounded-lg overflow-hidden z-20 border-4 border-black"
            >
            <img
                src={img03}
                alt="Close-up detail of a fabric texture"
                className="w-full h-full object-cover"
            />
            </motion.div>

        </div>
      </div>
    </section>
  );
}

