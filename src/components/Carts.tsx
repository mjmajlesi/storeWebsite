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
    <div className="my-3 p-3">
      <Link to={`/product/${id}`}>
        <img className="rounded-md w-36 h-36 object-contain" src={product?.image} alt={product?.title ?? "Product image"} />
      </Link>
      <div>
        <h3 className="p-2">
          {product?.title}
        </h3>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Button className="" onClick={() => incrementCardItem(id)}>
          <FaPlus />
        </Button>

        <span>{qty}</span>

        <Button className="" onClick={() => decrementCardItem(id)}>
          <FaMinus />
        </Button>

        <Button
          className="p-1"
          variant="normal"
          onClick={() => removeCardItem(id)}
        >
          <IoIosRemoveCircleOutline size={30} />
        </Button>
      </div>
    </div>
  );
}
