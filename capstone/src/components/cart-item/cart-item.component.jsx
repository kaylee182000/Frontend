import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ cartitem }) => {
  const { name, quantity } = cartitem;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
