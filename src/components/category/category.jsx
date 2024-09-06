import "./category.styles.css";
import { styles } from "../../data/data";

const Category = () => {
  return (
    <div className="category-container">
      <h2>BROWSE BY DRESS STYLE</h2>
      <div className="style-grid">
        {styles.map((style, i) => (
          <div
            key={i}
            className={`style-item style-${style.name.toLowerCase()}`}
          >
            <img src={style.image} alt={style.name} loading="lazy" />
            <h1 className="category-name">{style.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
