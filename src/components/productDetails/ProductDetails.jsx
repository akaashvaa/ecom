import { useParams } from "react-router-dom";
import { productDetails, products } from "../../data/data";
import "./productDetails.styles.css";
import BreadScrumb from "../breadScrumb/BreadScrumb";
import ProductBody from "./productBody/ProductBody";
import ProductFooter from "./productFooter/ProductFooter";
import ProductShowcase from "../productShowcase/ProductShowcase";

function ProductDetails() {
  const { id } = useParams();
  const data1 = productDetails.filter((el) => el.id === id);
  const data2 = products.filter((el) => el.id === id);
  const product = { ...data1[0], ...data2[0] };
  // console.log(id, data1[0], data2[0]);
  const pwd = ["Shop", ...data1[0].categories];

  return (
    <div className="productDetails-container">
      <BreadScrumb pwd={pwd} />
      <ProductBody product={product} />
      <ProductFooter id={id} />
      <ProductShowcase
        name="You might also like"
        btn={false}
        type="new-arrivals"
      />
    </div>
  );
}
export default ProductDetails;
