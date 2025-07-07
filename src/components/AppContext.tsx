import { createContext, useContext, useEffect, useState } from "react";
import { Tchildern } from "./container";
import useLocalStorage from "./useLocalStorage";
import { FLogin } from "../services/api";
import { useNavigate } from "react-router-dom";

interface IContext {
    cardItems : ICardItems[]
    AppInCountCards: (id : number) => void
    AppDeCountCards : (id : number) => void
    getCountCards : (id : number) => number
    AppRemoveCards : (id : number) => void
    getQTY : number
    login : Boolean
    handleLogin : (username : string , password : string) => void
    handleOutlogin : () => void
};

export interface ICardItems { 
    id : number
    qty : number
    //qty = count تعداد خرید کاربر
};
export const AppShoppingCard = createContext({} as IContext);

// custom Hook for useContext
export const useAppContext = ()=>{
    return useContext(AppShoppingCard)
};

const AppContext = ({children}: Tchildern)=>{
    const [ cardItems , setCardItems] = useLocalStorage<ICardItems[]>("cardItems" , [])
    const [login , setLogin] = useState<Boolean>(false)

    const navigate = useNavigate()

    const AppInCountCards = (id: number)=>{
        setCardItems( cardItem => {

            const findCarts = cardItem.find(item => item.id === id)
            if(!findCarts){
                return [...cardItem , {id : id , qty : 1}]
            }
            else{
                return cardItem.map(items => {
                    return items.id === id ? {...items , qty : items.qty + 1} : items
                })
            }
        })
    };

    const AppDeCountCards = (id : number ) => {
        setCardItems( cardItem => {
            const findCarts = cardItem.find(item => item.id === id);
            if(findCarts?.qty === 1){
                return cardItem.filter(item => item.id !== id)
            } else{
                return cardItem.map(items => items.id === id ? {...items , qty : items.qty - 1} : items )
            }
        })
    };

    const AppRemoveCards = (id : number)=>{
        setCardItems(cardItem => cardItem.filter((items => items.id !== id)))
    }

    const getCountCards = (id : number)=>{
        return cardItems.find(item => item.id === id)?.qty || 0
    }

    const getQTY = cardItems.reduce((qty , item )=> qty + item.qty , 0)

    ////
    
    const handleLogin = (username:string , password : string)=>{
            FLogin(username , password).finally(()=>{
                let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                localStorage.setItem("token" , token)
                setLogin(true)
                navigate("/")
            });
    };

    ////

    const handleOutlogin = ()=>{
        setLogin(false)
        navigate("/login")
        localStorage.removeItem("token")
    };

    useEffect(() => {
        let token = localStorage.getItem("token")
        token && setLogin(true)
    }, [])
    
    return(
        <AppShoppingCard.Provider value={{cardItems ,
        AppInCountCards ,
        AppDeCountCards ,
        getCountCards ,
        AppRemoveCards , 
        getQTY ,
        login ,
        handleLogin ,
        handleOutlogin}}>
            {children}
        </AppShoppingCard.Provider>

    );
};
export default AppContext



/* export const AppShoppingCard = createContext({} as IContext);
== 
export const AppShoppingCard = createContext<IContext>({cardItems : ICardItems[]}); */