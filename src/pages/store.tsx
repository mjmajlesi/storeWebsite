import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import Container from "../components/container";
import { Link } from "react-router-dom";
import { getProducts } from "../services/api";

export interface IProdect {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Store() {
  const [Product, setProduct] = useState<IProdect[]>();
  const [search, setSearch] = useState("");
  useEffect(() => {
    getProducts().then((res) => setProduct(res));
  }, []);

  return (
    <Container>
      <div className="flex justify-between relative ms:hidden gap-8">
        <div className=" md:flex md:flex-col hidden gap-9 h-screen w-1/5">
          <h1 className="font-bold text-3xl text-gray-300">Filters</h1>
          <ul className="flex flex-col justify-center items-start gap-3">
            <li>
              <Link to={"/clothes"}>Clothes</Link>
            </li>
            <li>
              <Link to={"/electrics"}>Electrics</Link>
            </li>
          </ul>
          <div className="flex flex-col items-start gap-1">
            <label className="font-semibold text-lg" htmlFor="Search">Search: </label>
            <input
              id="Search"
              type="search"
              className="h-9 bg-slate-600 rounded-lg p-3 focus:outline-none focus:outline-[#1e98d5]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        {search === "" ? (
          <div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-5">
              {Product?.map((pruduct) => (
                <Link key={pruduct.id} to={`/product/${pruduct.id}`}>
                  <Products {...pruduct} />
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-5">
              {
                Product?.filter(product => 
                  product.title.toLowerCase().includes(search.toLowerCase()) || 
                  product.description.toLowerCase().includes(search.toLowerCase())
                ).map(pruducts => (
                  <Link key={pruducts.id} to={`/product/${pruducts.id}`}>
                  <Products {...pruducts} />
                </Link>
                ))
              }
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
