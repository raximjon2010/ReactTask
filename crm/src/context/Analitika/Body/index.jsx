import { createContext, useState } from "react";
import { CardData } from "../../../componets/Analitika/utils/cardData";

export const BodyFunction = createContext()
const BodyProvider = ({children}) => {
    const [data, setData] = useState(CardData)
    return (
        <BodyFunction.Provider value={[data, setData]}>
            {children}
        </BodyFunction.Provider>
    )
}
export default BodyProvider