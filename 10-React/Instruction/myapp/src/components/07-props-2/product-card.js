import React from 'react';
import "./card.scss";

const ProductCard = (props) => {
  const {name, children} = props;
  return (
    <div className="product-card">
      {name}
      {children}
    </div>
  )
}

export default ProductCard