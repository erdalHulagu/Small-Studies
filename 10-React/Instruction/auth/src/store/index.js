import { useReducer, useContext, createContext } from "react";
import { authInitialState } from "./auth/auth-initial-state";
import { authReducer } from "./auth/auth-reducer";
import { counterInitialState } from "./counter/counter-initial-state";
import { counterReducer } from "./counter/counter-reducer";

// Boş bir merkezi state oluşturuldu
const StoreContext = createContext();

// Componentlerde merkezi state e erişimi kolaylaştırmak için kendi hook umuzu yazdık
export const useStore = () => useContext(StoreContext);



export const StoreProvider = ({children}) => {
    // useReducer hook una reducer ve initialstate parametre olarak verilir...
    // useReducer fonksiyonu ise geriye setter ve getter ları döner.
    //       getter          setter
    const [counterState, dispatchCounter] = useReducer(counterReducer, counterInitialState);
    const [authState, dispatchAuth] = useReducer(authReducer, authInitialState);

    return(
        <StoreContext.Provider value={{counterState, dispatchCounter,authState, dispatchAuth}}>
            {children}
        </StoreContext.Provider>
    )


}



