import { createContext, useState } from "react";
import {Navlists} from '../../../componets/Analitika/utils/sidebar';

export const SidebarFunction = createContext();

const SideBarProvider = ({children}) => {
    const [NavList,setNavlist] = useState(Navlists);
    return (
        <SidebarFunction.Provider value={[NavList,setNavlist]}>
            {children}
        </SidebarFunction.Provider>
    )
}
export default SideBarProvider;