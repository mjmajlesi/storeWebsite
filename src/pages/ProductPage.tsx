import React, { useEffect, useState } from "react";
import Container from "../components/container";
import Button from "../components/buttons";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/api";
import { IProduct } from "./store";
import { useAppContext } from "../components/AppContext";
import DoneIcon from "@mui/icons-material/Done";

export default function ProductPage() {
  const { incrementCardItem, getCardItemCount } = useAppContext();

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
      <div className="flex flex-col items-center">
        <div className="shadow-md w-500">
          <div>
            <img className="rounded-md p-3" src={product?.image} alt={product?.title ?? "Product image"} />
          </div>
          <div className="flex justify-between items-center px-2">
            <h2>{product?.title}</h2>
            <span>{product?.price}$</span>
          </div>
          <div className="p-3">
            <p className="mb-4 text-gray-700">{product?.description}</p>
            {!isAdded ? (
              <Button
                onClick={() => incrementCardItem(productId)}
                className="text-slate-300 font-semibold text-xl p-2 border-2 border-[#1e98d5]"
                variant="normal"
              >
                Add Product
              </Button>
            ) : (
              <div className="flex border-2 bg-green-800 p-3 items-center rounded">
                <DoneIcon className="text-white" />
                <p className="ml-2 text-white">
                  This product has been added to the shopping cart
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
