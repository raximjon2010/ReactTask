import { createContext, useReducer } from "react";
import { funcRegister, initial } from "./reduce";

export const RegisterFunction = createContext();

const RegisterProvider = ({children}) => {
const [register, dispatch]= useReducer(funcRegister, initial);
    return (
        <RegisterFunction.Provider value={[register, dispatch]}>
            {children}
        </RegisterFunction.Provider>
    )
}
export default RegisterProvider