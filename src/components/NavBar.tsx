import React, { useContext } from "react";
import Container from "./container";
import { Link } from "react-router-dom";
import Button from "./buttuns";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppContext } from "./AppContext";
import { ThemeContext } from "../pages/toggleTheme";
export default function NavbarSite(){
  const {Toggle , theme} = useContext(ThemeContext)

  const {getQTY , login , handleOutlogin} = useAppContext()
    return(
        <Container>
            <nav className=" grid grid-cols-12 mb-4 border-b-2 border-slate-800 p-2">
              <span className=" text-3xl lg:col-span-4">Mjm</span>
                <ul className="flex gap-5 justify-center items-center col-span-4">
                  <li><Link to={"/"} >Home</Link></li>
                  <li><Link to={"/store"} >Store</Link></li>
                  <Button onClick={()=> Toggle()} >{theme}</Button>
                </ul>
                <div className="col-span-4 relative">
                  <Link to={'/cart'}>
                    <Button variant="normal" className=" float-right mt-2 mr-2"> <ShoppingCartIcon /> </Button>
                    <span className=" right-0 top-0 absolute w-6 h-6 rounded-full p-1 flex justify-center items-center bg-red-700">{getQTY}</span>
                  </Link>
                  {login  ?
                    <Button onClick={handleOutlogin} variant="login" className="float-right mt-2.3 mr-4">logOut</Button> :
                  <Link to={'/login'}>
                    <Button variant="login" className="float-right mt-2.3 mr-4">login</Button>
                  </Link>
                  }
                  
                </div>

            </nav>
        </Container>
    )
}