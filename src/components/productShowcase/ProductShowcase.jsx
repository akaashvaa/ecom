import ProductCard from "../productCard/productCard";
import "./productShowcase.styles.css";

import { topSelling, newArrivals } from "../../data/data.js";
import Button from "../button/Button.jsx";

function ProductShowcase({ name, type }) {
  const data = type === "new" ? newArrivals : topSelling;
  return (
    <div className="productShowcase-container">
      <h1 className="productShowcase-header">{name}</h1>
      <div className="productCard-list">
        {data.map((productDetails) => (
          <ProductCard
            key={productDetails.name}
            productDetails={productDetails}
          />
        ))}
      </div>
      <Button type="secondary" title="View All" />
    </div>
  );
}
export default ProductShowcase;
