import { createContext, useReducer } from "react";
import { VeficationFunc, initial } from "./reduce";

export const VerficationFunction = createContext();

export const VerficationProvider = ({children}) => {
    const [verfication, dispatch] = useReducer(VeficationFunc,initial)
    return (
        <VerficationFunction.Provider value={[verfication, dispatch]}>
            {children}
        </VerficationFunction.Provider>
    )
}
export default VerficationProvider