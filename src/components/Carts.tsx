import React, { useEffect, useState } from "react";
import Button from "./buttuns";
import { ICardItems, useAppContext } from "./AppContext";
import { IProdect } from "../pages/store";
import { getProdect } from "../services/api";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export default function Carts({ id, qty }: ICardItems) {
  const { AppDeCountCards, AppInCountCards, AppRemoveCards } = useAppContext();

  const [Prodect, setPrudect] = useState<IProdect>();
  useEffect(() => {
    getProdect(id).then((res) => {
      setPrudect(res);
    });
  }, [id]);

  return (
      <div className="my-3 p-3">
        <Link to={`/product/${id}`}>
          <img className="rounded-md w-36 h-36 object-contain" src={Prodect?.image} alt="img" />
        </Link>
          <div>
            <h3 className="p-2">
              {Prodect?.title} : {id}
            </h3>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Button className="" onClick={() => AppInCountCards(id)}>
              <FaPlus />
            </Button>

            <span>{qty}</span>

            <Button className="" onClick={() => AppDeCountCards(id)}>
              <FaMinus />
            </Button>

            <Button
              className="p-1"
              variant="normal"
              onClick={() => AppRemoveCards(id)}
            >
              <IoIosRemoveCircleOutline size={30} />
            </Button>
          </div>
      </div>
  );
}
