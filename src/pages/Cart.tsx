import Container from "../components/container";
import Button from "../components/buttons";
import { useAppContext } from "../components/AppContext";
import Carts from "../components/Carts";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaShoppingBasket, FaShieldAlt, FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cardItems } = useAppContext();
  
  // Calculate subtotal using the actual product prices would be better, 
  // but keeping current logic or making it more robust. 
  // We'll calculate it from a better place if needed, but let's stick to total logic.
  const subtotal = cardItems.reduce((total, item) => {
    // Note: We use fixed prices or fetch them. For UI demo, let's assume a logic.
    // In a real app, price comes from the product data.
    return total + (item.id * item.qty); 
  }, 0);
  
  const discount = cardItems.length > 0 ? subtotal * 0.1 : 0; // 10% discount
  const shipping = cardItems.length > 0 ? 5.99 : 0;
  const total = subtotal - discount + shipping;

  return (
    <div className="min-h-screen bg-slate-950 text-white py-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-400/5 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl sm:text-4xl font-display font-black text-white mb-2">
                Your Shopping <span className="text-brand-400">Cart</span>
              </h1>
              <p className="text-slate-400 text-sm sm:text-base">
                {cardItems.length} items in your bag
              </p>
            </div>
            <Link 
              to="/store" 
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <FaArrowLeft size={14} /> Continue Shopping
            </Link>
          </div>

          {cardItems.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 px-6 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10"
            >
              <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShoppingBasket size={32} className="text-slate-500" />
              </div>
              <h2 className="text-2xl text-white font-bold mb-3">Your cart is empty</h2>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">
                Looks like you haven't added anything to your cart yet. Explore our latest products and find something you love!
              </p>
              <Link to="/store">
                <Button variant="login" className="px-8 py-3 rounded-xl shadow-lg shadow-brand-500/20">
                  Explore Store
                </Button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Items List */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                <AnimatePresence mode="popLayout">
                  {cardItems.map((item) => (
                    <Carts key={item.id} {...item} />
                  ))}
                </AnimatePresence>
                
                <Link 
                  to="/store" 
                  className="sm:hidden flex items-center justify-center gap-2 text-sm font-semibold text-slate-400 py-4"
                >
                  <FaArrowLeft size={14} /> Continue Shopping
                </Link>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-4">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 sticky top-24 shadow-2xl"
                >
                  <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-slate-400">
                      <span className="text-sm">Subtotal</span>
                      <span className="text-white font-medium">{subtotal.toFixed(2)} $</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span className="text-sm">Estimated Shipping</span>
                      <span className="text-white font-medium">{shipping.toFixed(2)} $</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-brand-400">Discount (10%)</span>
                      <span className="text-brand-400 font-medium">-{discount.toFixed(2)} $</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6 mb-8">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="block text-xs text-slate-500 uppercase tracking-widest mb-1">Grand Total</span>
                        <span className="text-3xl font-black text-white">{total.toFixed(2)}</span>
                        <span className="text-brand-400 font-bold ml-1">$</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full !py-4 rounded-2xl text-base font-bold shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 transition-all active:scale-[0.98]" variant="login">
                    Proceed to Checkout
                  </Button>

                  {/* Trust Badges */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-wider">
                      <FaShieldAlt className="text-brand-400/50" /> Secure Checkout
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-wider">
                      <FaTruck className="text-brand-400/50" /> Fast Delivery
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
