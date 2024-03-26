import { createContext, useReducer } from "react";
import { initial, resetFunc } from "./reduce";

export const ResetFunction = createContext();

const ResetProvider = ({children}) => {
    const [reset, dispatch] = useReducer(resetFunc, initial)
    return (
        <ResetFunction.Provider value={[reset, dispatch]}>
            {children}
        </ResetFunction.Provider>
    )
}
export default ResetProvider