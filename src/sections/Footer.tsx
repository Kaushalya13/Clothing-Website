import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaCcVisa, FaCcMastercard, FaPaypal, FaCcAmex } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-dark-text to-black text-gray-300 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
        {/* Newsletter */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white">
            Stay in the Loop ✨
          </h2>
          <p className="mt-3 text-gray-400">
            Subscribe for style tips, new arrivals & exclusive offers.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full text-black bg-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white font-montserrat mb-4">
              YourBrand
            </h3>
            <p className="text-sm leading-relaxed">
              Redefining style with curated collections for the modern
              individual. Step into timeless elegance, reimagined.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="hover:text-accent transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider">
              Help & Info
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="hover:text-accent transition">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-accent transition">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent transition">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-start space-x-5 mb-6">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-accent transition"
              >
                <FiFacebook size={22} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-accent transition"
              >
                <FiInstagram size={22} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-accent transition"
              >
                <FiTwitter size={22} />
              </a>
            </div>

            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider">
              Secure Payments
            </h4>
            <div className="flex justify-center md:justify-start space-x-4 text-2xl text-gray-400">
              <FaCcVisa />
              <FaCcMastercard />
              <FaPaypal />
              <FaCcAmex />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-white">
          <p>&copy; {new Date().getFullYear()} YourBrand. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
