import { useReducer, useContext, createContext } from "react";
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


    return(
        <StoreContext.Provider value={{counterState, dispatchCounter}}>
            {children}
        </StoreContext.Provider>

    )


}



