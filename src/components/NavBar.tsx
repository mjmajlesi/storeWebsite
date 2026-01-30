import React, { useState } from "react";
import Container from "./container";
import { Link } from "react-router-dom";
import Button from "./buttuns";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppContext } from "./AppContext";
export default function NavbarSite() {
  const { getQTY, login, handleOutlogin } = useAppContext();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navs = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: `${login ? "Store" : "Login"}`,
      path: login ? "/store" : "/login",
    },
  ];
  return (
    <Container>
      <div className="flex items-center justify-between w-full p-3 mt-3">
        <div>
          <span className="text-2xl md:text-3xl xl:text-4xl font-medium">
            MJM
          </span>
        </div>
        <div className="flex items-center justify-center gap-5 max-[768px]:hidden">
          {navs.map((nav, index) => (
            <div
              key={index}
              className="text-base md:text-lg hover:transition-all hover:scale-105 hover:duration-300 cursor-pointer"
            >
              <Link to={nav.path}>{nav.name}</Link>
            </div>
          ))}
        </div>
        <div className="relative max-[768px]:hidden">
          <Link to={"/cart"}>
            <Button variant="normal" className=" float-right mr-2">
              {" "}
              <ShoppingCartIcon />{" "}
            </Button>
            <span className=" right-0 top-0 absolute w-6 h-6 rounded-full p-1 flex justify-center items-center bg-red-700">
              {getQTY}
            </span>
          </Link>
          {login ? (
            <Button
              onClick={handleOutlogin}
              variant="login"
              className="float-right mr-4"
            >
              logOut
            </Button>
          ) : (
            <Link to={"/login"}>
              <Button variant="login" className="float-right mr-4">
                login
              </Button>
            </Link>
          )}
        </div>
        <div
          className={`md:hidden flex ${isMenuOpen ? "flex-row" : "flex-col"} items-center justify-center gap-1 cursor-pointer`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Mobile menu button */}
          {isMenuOpen ? (
            <>
              <div className="h-6 w-1 rounded-full bg-white" />
              <div className="h-6 w-1 rounded-full bg-white" />
              <div className="h-6 w-1 rounded-full bg-white" />
            </>
          ) : (
            <>
              <div className="h-1 w-6 rounded-full bg-white" />
              <div className="h-1 w-6 rounded-full bg-white" />
              <div className="h-1 w-6 rounded-full bg-white" />
            </>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="w-full flex flex-col items-center justify-center gap-4">
          {navs.map((nav, index) => (
            <div
              key={index}
              className="text-base md:text-lg hover:transition-all hover:scale-105 hover:duration-300 cursor-pointer"
            >
              <Link to={nav.path} onClick={() => setIsMenuOpen(false)}>
                {nav.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}
