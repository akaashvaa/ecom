import { useParams } from "react-router-dom";
import { productDetails } from "../../data/data";
import "./productDetails.styles.css";
function ProductDetails() {
  const { id } = useParams();
  const product = productDetails.filter((el) => el.id === id);
  // console.log(id, product[0]);
  return (
    <div className="productDetails-container">
      <BreadScrumb pwd={product[0].categories} />
      <h1>Product deatils</h1>
    </div>
  );
}
export default ProductDetails;

function BreadScrumb({ pwd }) {
  // console.log(pwd)

  return (
    <div className="bs-container">
      <p>Home</p> <span>{">"} </span> <p>Shop</p> <span>{">"} </span>
      {pwd.map((title) => (
        <>
          <p>{title}</p> <span>{">"} </span>
        </>
      ))}
    </div>
  );
}
