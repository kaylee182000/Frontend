import React from "react";

import SHOP_DATA from "../../data/shop-data.json";

const Shop = () => {
  return (
    <div>
      {SHOP_DATA.map((product) => {
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
