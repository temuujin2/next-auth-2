import { createContext, useContext, useState } from "react";

const LoadingContext = createContext()

export const LoadingComp = ({ children }) => {
    const [state, setState] = useState()
    return (
        <LoadingContext.Provider value={{ state, setState }}>
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => useContext(LoadingContext);