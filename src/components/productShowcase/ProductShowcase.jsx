import ProductCard from "../productCard/productCard";
import "./productShowcase.styles.css";

import { products } from "../../data/data.js";
import Button from "../button/Button.jsx";

function ProductShowcase({ name, type, btn = true }) {
  const data = products.filter((el) => el.section === type);
  // console.log(data);
  return (
    <section
      id={type === "new-arrivals" ? "new" : "top"}
      className="productShowcase-container"
    >
      <h1 className="productShowcase-header">{name}</h1>
      <div className="productCard-list">
        {data.map((productDetails) => (
          <ProductCard
            key={productDetails.id}
            productDetails={productDetails}
          />
        ))}
      </div>
      {btn && (
        <div className="view-all">
          <Button type="secondary" title="View All" />
        </div>
      )}
    </section>
  );
}
export default ProductShowcase;
