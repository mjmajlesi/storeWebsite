import React, { useEffect, useState } from "react";
import Container from "../components/container";
import Button from "../components/buttons";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../services/api";
import { IProduct } from "./store";
import { useAppContext } from "../components/AppContext";
import DoneIcon from "@mui/icons-material/Done";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ProductPage() {
  const { incrementCardItem, getCardItemCount } = useAppContext();
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    if (params.id) {
      getProduct(params.id).then((res) => setProduct(res));
    }
  }, [params.id]);

  const productId = params.id ? parseInt(params.id) : 0;
  const isAdded = getCardItemCount(productId) > 0;

  return (
    <Container>
      <div className="py-6">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowBackIcon fontSize="small" />
          <span>Back to products</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-800">
          {/* Image Section */}
          <div className="bg-white p-6 sm:p-10 lg:sticky lg:top-24 lg:self-start">
            <img 
              className="w-full h-64 sm:h-80 lg:h-96 object-contain" 
              src={product?.image} 
              alt={product?.title ?? "Product image"} 
            />
          </div>

          {/* Details Section */}
          <div className="p-6 sm:p-10 flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {product?.title}
              </h2>
              <span className="text-2xl font-semibold text-[#1e98d5] whitespace-nowrap">
                {product?.price}$
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-slate-400 uppercase text-xs font-bold tracking-wider mb-2">Description</h3>
              <p className="text-slate-300 leading-relaxed">
                {product?.description}
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-slate-800">
              {!isAdded ? (
                <Button
                  onClick={() => incrementCardItem(productId)}
                  className="w-full sm:w-auto px-8 py-4 text-white font-bold text-lg rounded-xl shadow-lg hover:brightness-110"
                  variant="login"
                >
                  Add Product to Cart
                </Button>
              ) : (
                <div className="flex bg-green-900/30 border border-green-800 p-4 items-center rounded-xl">
                  <DoneIcon className="text-green-500" />
                  <p className="ml-3 text-green-400 font-medium">
                    Added to shopping cart
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
