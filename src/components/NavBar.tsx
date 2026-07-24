import React from 'react';
import Container from "../components/container";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/buttons";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppContext } from "./AppContext";

export default function NavbarSite() {
  const { cartQuantity, login, handleLogout } = useAppContext();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navs = [
    { name: "Home", path: "/" },
    { name: login ? "Store" : "Login", path: login ? "/store" : "/login" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Container>
      <nav className="flex items-center justify-between w-full py-4 mt-2 relative z-50">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-2xl tracking-tight transition-shadow">
            MJM
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navs.map((nav) => (
            <Link
              key={nav.path}
              to={nav.path}
              className={`text-sm font-medium transition-colors duration-200 ${isActive(nav.path) ? "text-brand-400" : "text-slate-300 hover:text-white"}`}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/cart" className="relative group">
            <Button variant="normal" className="p-2.5 !bg-slate-800 hover:!bg-slate-700 border border-slate-700 rounded-xl">
              <ShoppingCartIcon fontSize="small" />
            </Button>
            {cartQuantity > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-brand-400 text-[10px] font-bold text-white flex items-center justify-center">
                {cartQuantity}
              </span>
            )}
          </Link>

          {login ? (
            <Button
              onClick={handleLogout}
              variant="normal"
              className="!bg-slate-800 hover:!bg-slate-700 text-sm font-medium border border-slate-700 rounded-xl px-4 py-3"
            >
              Log Out
            </Button>
          ) : (
            <Link to="/login">
              <Button variant="login" className="text-sm font-medium rounded-xl px-4 py-3">
                Login
              </Button>
            </Link>
          )}
        </div>

        <div className="flex md:hidden items-center gap-3">
          <Link to="/cart" className="relative">
            <ShoppingCartIcon fontSize="small" className="text-slate-300" />
            {cartQuantity > 0 && (
              <span className="absolute -top-1 -right-1.5 w-4 h-4 rounded-full bg-brand-400 text-[9px] font-bold text-white flex items-center justify-center">
                {cartQuantity}
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-slate-200 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
            <span className={`w-5 h-0.5 bg-slate-200 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-slate-200 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
          </button>
        </div>

        <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setIsMenuOpen(false)}>
          <div className={`flex flex-col items-center justify-center gap-8 mt-20 transition-all duration-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            {navs.map((nav) => (
              <Link
                key={nav.path}
                to={nav.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-semibold transition-colors ${isActive(nav.path) ? "text-brand-400" : "text-slate-300 hover:text-white"}`}
              >
                {nav.name}
              </Link>
            ))}
            {login ? (
              <Button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                variant="normal"
                className="!bg-slate-800 text-lg px-8 py-3 rounded-xl border border-slate-700"
              >
                Log Out
              </Button>
            ) : (
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="login" className="text-lg px-8 py-3 rounded-xl">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </Container>
  );
}
