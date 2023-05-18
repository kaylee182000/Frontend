import React, { useContext } from "react";

import { ProductContext } from "../../context/product.context";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
