import React from "react";
import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ data }) => {
  return (
    <div className="categories-container">
      {data.map((i) => {
        return <CategoryItem key={i.id} data={i} />;
      })}
    </div>
  );
};

export default Directory;
