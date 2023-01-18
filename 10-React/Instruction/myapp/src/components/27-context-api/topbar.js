import React, { useContext } from 'react'
import StoreContext from '../../store';
import "./topbar.scss";  

const Topbar = () => {
    const store = useContext(StoreContext);
    const { currencies } = store;

    const formatCurrency = (val) => { 
        return (1 / currencies[val]).toFixed(2);
     }


  return (
    <header className="exchange">
        <nav>
            <h3>Exchange</h3>
            <div>
                <span>$: {formatCurrency("USD")}₺</span>
                <span>€: {formatCurrency("EUR")}₺</span>
            </div>
        </nav>
    </header>
  )
}

export default Topbar