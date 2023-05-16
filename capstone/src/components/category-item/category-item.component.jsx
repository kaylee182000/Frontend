import "./category-item.styles.scss";

const CategoryItem = ({ data }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{data.title}</h2>
        <p>Shop Nows</p>
      </div>
    </div>
  );
};

export default CategoryItem;
