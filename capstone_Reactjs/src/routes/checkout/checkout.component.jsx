import React, { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div>
        {cartItems.map((i) => {
          return (
            <div key={i.id}>
              <h2>{i.name}</h2>
              <span>{i.quantity}</span>
              <span>decrement</span>
              <span onClick={() => addItemToCart(i)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
