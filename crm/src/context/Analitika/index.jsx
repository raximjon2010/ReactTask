import { createContext, useReducer } from "react";
import ActiveF, { initial } from "./reduce";

export const AnalitikaFunction = createContext()

const AnalitikaProvider = ({children}) => {
    const [Active, dispatch] = useReducer(ActiveF, initial)
    return (
        <AnalitikaFunction.Provider value = {[Active, dispatch]}>
            {children}
        </AnalitikaFunction.Provider>
    )
}
export default AnalitikaProvider