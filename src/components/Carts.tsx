import React, { useEffect, useState } from "react";
import Button from "./buttons";
import { ICardItems, useAppContext } from "./AppContext";
import { IProduct } from "../pages/store";
import { getProduct } from "../services/api";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export default function Carts({ id, qty }: ICardItems) {
  const { decrementCardItem, incrementCardItem, removeCardItem } = useAppContext();

  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    getProduct(id).then((res) => {
      setProduct(res);
    });
  }, [id]);

  return (
    <div className="bg-slate-900 rounded-xl p-4 shadow-lg border border-slate-800 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
      <Link to={`/product/${id}`} className="flex-shrink-0 w-full sm:w-24 h-24 sm:w-28 sm:h-28">
        <img 
          className="w-full h-full object-contain rounded-lg" 
          src={product?.image} 
          alt={product?.title ?? "Product image"} 
        />
      </Link>

      <div className="flex-1 min-w-0">
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-semibold text-white text-base sm:text-lg truncate">
            {product?.title}
          </h3>
        </Link>
        <div className="flex items-center gap-3 mt-3">
          <Button 
            className="p-2" 
            onClick={() => incrementCardItem(id)}
            variant="normal"
            aria-label="Increase quantity"
          >
            <FaPlus size={18} />
          </Button>

          <span className="w-10 text-center font-mono text-lg text-white">
            {qty}
          </span>

          <Button 
            className="p-2" 
            onClick={() => decrementCardItem(id)}
            variant="normal"
            aria-label="Decrease quantity"
          >
            <FaMinus size={18} />
          </Button>

          <Button
            className="p-2 ml-auto"
            variant="danger"
            onClick={() => removeCardItem(id)}
            aria-label="Remove item"
          >
            <IoIosRemoveCircleOutline size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
}