import React from 'react';
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import CountUp from "react-countup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IProduct } from "./store";
import { getProducts } from "../services/api";
import Products from "../components/Products";
import Lottie from "react-lottie";
import Anime from "./../images/AnimationShop.json";
import Support from "./../images/support.svg";
import Return from "./../images/days-return.svg";
import express from "./../images/express-delivery.svg";
import delivery from "./../images/cash-on-delivery.svg";

// Lucide-like icons
const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const fadeInUp: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const stagger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Main() {
  const [products, setProducts] = React.useState<IProduct[]>();

  React.useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Anime,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <div className="bg-slate-950 pb-20">
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="z-10"
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="mb-4 inline-flex">
                <span className="px-3 py-1 rounded-full bg-brand-400/10 border border-brand-400/20 text-brand-400 text-xs font-bold uppercase tracking-widest">
                  Summer Collection 2024
                </span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-white leading-tight mb-6"
              >
                Elevate Your <br /> <span className="text-brand-400">Digital Lifestyle</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed"
              >
                Discover the perfect blend of high-performance electronics and contemporary apparel. Curated for the modern professional.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link
                  to="/store"
                  className="flex items-center gap-2 px-8 py-4 bg-brand-400 text-white font-bold rounded-2xl hover:bg-brand-500 transition-all shadow-xl shadow-brand-500/20"
                >
                  Start Shopping <ArrowRightIcon />
                </Link>
                <Link
                  to="/clothes"
                  className="px-8 py-4 bg-slate-800 text-white font-bold rounded-2xl hover:bg-slate-700 transition-all border border-slate-700"
                >
                  View Apparel
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-16 flex items-center gap-10 opacity-70"
              >
                <div>
                  <span className="text-2xl font-bold text-white">
                    <CountUp end={9000} duration={2.5} separator="," />+
                  </span>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">Premium Goods</span>
                </div>
                <div className="w-px h-10 bg-slate-800" />
                <div>
                  <span className="text-2xl font-bold text-white">
                    <CountUp end={28} duration={3} />
                  </span>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">Industry Awards</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:flex justify-center items-center"
            >
              <div className="absolute w-[500px] h-[500px] bg-brand-400/10 rounded-full blur-3xl -z-10" />
              <div className="bg-slate-900/40 p-8 rounded-[3rem] border border-slate-800/50 backdrop-blur-md">
                <Lottie options={defaultOptions} height={400} width={400} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-2">Featured Arrivals</h2>
              <div className="h-1.5 w-20 bg-brand-400 rounded-full" />
            </div>
            <Link to="/store" className="text-brand-400 font-bold hover:text-brand-300 flex items-center gap-2">
              Explore Full Collection <ArrowRightIcon />
            </Link>
          </div>

          <div className="slider-container">
            <Slider {...settings}>
              {products?.slice(0, 10).map((product) => (
                <div key={product.id} className="px-2 pb-10">
                  <Link to={`/product/${product.id}`} className="block">
                    <Products {...product} />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div whileHover={{ y: -5 }} className="group relative h-80 rounded-[2.5rem] overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-clothes bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
              <div className="relative z-10 text-center p-8">
                <h3 className="text-4xl font-display font-black text-white mb-4">Apparel</h3>
                <Link to="/clothes" className="inline-flex px-6 py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-brand-400 hover:text-white transition-all shadow-lg">Shop Wardrobe</Link>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="group relative h-80 rounded-[2.5rem] overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-digital bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
              <div className="relative z-10 text-center p-8">
                <h3 className="text-4xl font-display font-black text-white mb-4">Electronics</h3>
                <Link to="/electrics" className="inline-flex px-6 py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-brand-400 hover:text-white transition-all shadow-lg">Explore Tech</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Secured Payments", desc: "Non-cash, encrypted" , svg: delivery },
              { label: "Express Delivery", desc: "Seven day worldwide", svg: express },
              { label: "Fast Shipping", desc: "Priority dispatch" , svg: Return },
              { label: "100% Authentic", desc: "Direct from brands", svg: Support },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-400 mb-6 shadow-sm">
                  <img src={feature.svg} alt={feature.label} className="w-8 h-8" />
                </div>
                <h4 className="text-white font-bold mb-1">{feature.label}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
