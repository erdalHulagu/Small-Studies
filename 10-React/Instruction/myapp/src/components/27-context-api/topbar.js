import React from 'react'
import "./topbar.scss";  

const Topbar = () => {
  return (
    <header className="exchange">
        <nav>
            <h3>Exchange</h3>
            <div>
                <span>$: 18.99₺</span>
                <span>€: 20.99₺</span>
            </div>
        </nav>
    </header>
  )
}

export default Topbar