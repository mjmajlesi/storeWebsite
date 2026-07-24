import { createContext, useContext, useEffect, useState } from "react";
import { Tchildern } from "./container";
import useLocalStorage from "./useLocalStorage";
import { FLogin } from "../services/api";
import { useNavigate } from "react-router-dom";

interface IContext {
    cardItems: ICardItems[]
    incrementCardItem: (id: number) => void
    decrementCardItem: (id: number) => void
    getCardItemCount: (id: number) => number
    removeCardItem: (id: number) => void
    cartQuantity: number
    login: boolean
    handleLogin: (username: string, password: string) => void
    handleLogout: () => void
}

export interface ICardItems {
    id: number
    qty: number
}

export const AppShoppingCard = createContext({} as IContext);

// Custom hook for consuming the AppShoppingCard context
export const useAppContext = () => {
    return useContext(AppShoppingCard)
};

const AppContext = ({ children }: Tchildern) => {
    const [cardItems, setCardItems] = useLocalStorage<ICardItems[]>("cardItems", [])
    const [login, setLogin] = useState<boolean>(false)

    const navigate = useNavigate()

    const incrementCardItem = (id: number) => {
        setCardItems(prev => {
            const existingItem = prev.find(item => item.id === id)
            if (!existingItem) {
                return [...prev, { id, qty: 1 }]
            }
            return prev.map(item =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        })
    };

    const decrementCardItem = (id: number) => {
        setCardItems(prev => {
            const existingItem = prev.find(item => item.id === id)
            if (existingItem?.qty === 1) {
                return prev.filter(item => item.id !== id)
            }
            return prev.map(item =>
                item.id === id ? { ...item, qty: item.qty - 1 } : item
            )
        })
    };

    const removeCardItem = (id: number) => {
        setCardItems(prev => prev.filter(item => item.id !== id))
    }

    const getCardItemCount = (id: number) => {
        return cardItems.find(item => item.id === id)?.qty || 0
    }

    const cartQuantity = cardItems.reduce((total, item) => total + item.qty, 0)

    const handleLogin = (username: string, password: string) => {
        FLogin(username, password).then(() => {
            // Note: In production, a real JWT would be stored here.
            // For demo purposes, a placeholder token is used.
            const token = "demo-token-mjm"
            localStorage.setItem("token", token)
            setLogin(true)
            navigate("/")
        });
    };

    const handleLogout = () => {
        setLogin(false)
        navigate("/login")
        localStorage.removeItem("token")
    };

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) setLogin(true)
    }, [])

    return (
        <AppShoppingCard.Provider value={{
            cardItems,
            incrementCardItem,
            decrementCardItem,
            getCardItemCount,
            removeCardItem,
            cartQuantity,
            login,
            handleLogin,
            handleLogout,
        }}>
            {children}
        </AppShoppingCard.Provider>
    );
};

export default AppContext
