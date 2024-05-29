import { createContext } from "react"
import { food_list } from "../assets/frontend_assets/assets"

export const StoreContext = createContext(null)

const StoreContextProvider = (prop)  => {

    const contextvalue = {
        food_list
    }

    return (
        <StoreContext.Provider value={contextvalue}>
            {prop.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;