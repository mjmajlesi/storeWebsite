import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./buttons";
import { ICardItems, useAppContext } from "./AppContext";
import { IProduct } from "../pages/store";
import { getProduct } from "../services/api";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

export default function Carts({ id, qty }: ICardItems) {
  const { decrementCardItem, incrementCardItem, removeCardItem } = useAppContext();
  const [product, setProduct] = useState<IProduct>();
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    getProduct(id).then((res) => {
      setProduct(res);
    });
  }, [id]);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      removeCardItem(id);
    }, 200);
  };

  const itemPrice = product?.price ?? 0;
  const lineTotal = itemPrice * qty;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-4 transition-all duration-300 hover:border-slate-700/50 hover:bg-slate-800/60"
    >
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {/* Product Image */}
        <Link
          to={`/product/${id}`}
          className="flex-shrink-0 w-full sm:w-20 h-20 sm:h-24 bg-slate-800/50 rounded-xl overflow-hidden"
        >
          <img
            className="w-full h-full object-contain p-2 transition-transform duration-300 hover:scale-105"
            src={product?.image}
            alt={product?.title ?? "Product image"}
          />
        </Link>

        {/* Product Info */}
        <div className="flex-1 min-w-0  flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full">
          <Link to={`/product/${id}`} className="block">
            <h3 className="font-semibold text-white text-wrap text-sm sm:text-base truncate pr-2 group-hover:text-brand-400 transition-colors">
              {product?.title}
            </h3>
          </Link>

          {/* Price & Quantity Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
            {/* Price */}
            <div className="text-right sm:text-left w-full sm:w-auto">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Unit Price</p>
              <p className="font-bold text-white">{itemPrice.toFixed(2)}$</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2 bg-slate-800/50 rounded-xl px-3 py-2 border border-slate-700/50">
              <Button
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all"
                onClick={() => incrementCardItem(id)}
                variant="normal"
                aria-label="Increase quantity"
              >
                <FaPlus size={16} />
              </Button>

              <span className="w-10 text-center font-mono text-base text-white font-medium">
                {qty}
              </span>

              <Button
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all"
                onClick={() => qty > 1 && decrementCardItem(id)}
                variant="normal"
                aria-label="Decrease quantity"
                disabled={qty <= 1}
              >
                <FaMinus size={16} />
              </Button>
            </div>

            {/* Line Total */}
            <div className="text-right sm:text-left w-full sm:w-auto min-w-[80px]">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Total</p>
              <p className="font-bold text-brand-400 text-lg">{lineTotal.toFixed(2)}$</p>
            </div>

            {/* Remove Button */}
            <Button
              className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all ml-auto"
              onClick={handleRemove}
              variant="normal"
              aria-label="Remove item"
              disabled={isRemoving}
            >
              <FaTrash size={18} />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}