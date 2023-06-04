import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ cartitem }) => {
  const { name, quantity, imageUrl, price } = cartitem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
