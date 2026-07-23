import { useEffect, useState } from "react"

export default function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        let localStorageItem = localStorage.getItem(key)
        return localStorageItem !== null ? JSON.parse(localStorageItem) : initialValue
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue]
}
