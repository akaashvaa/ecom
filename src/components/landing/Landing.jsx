import "./landing.styles.css";
import landingImage from "../../assets/landing.png";
import brand1 from "../../assets/brand1.svg";
import brand2 from "../../assets/brand2.svg";
import brand3 from "../../assets/brand3.svg";
import brand4 from "../../assets/brand4.svg";
import brand5 from "../../assets/brand5.svg";
import Button from "../button/Button";
const brands = [
  {
    id: "brnad1",
    imgSrc: brand1,
  },

  {
    id: "brnad2",
    imgSrc: brand2,
  },
  {
    id: "brnad3",
    imgSrc: brand3,
  },
  {
    id: "brnad4",
    imgSrc: brand4,
  },
  {
    id: "brnad5",
    imgSrc: brand5,
  },
];
function Landing() {
  return (
    <div className="landing-container">
      <img
        src={landingImage}
        alt="landing"
        loading="lazy"
        className="landing-image"
      />
      <div className="self-branding">
        <h1 className="header">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <div className="shop-now-container">
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="shop-now">
            <Button type="primary" title="Shop Now " />
          </div>
        </div>
        <div className="self-branding-details">
          <div className="self-branding-details-card">
            <h1> 200+ </h1>
            <p>International Brands</p>
          </div>
          <div className="vhr" />
          <div className="self-branding-details-card">
            <h1> 2000+ </h1>
            <p>High-Quality Products</p>
          </div>
          <div className="vhr" />

          <div className="self-branding-details-card">
            <h1> 30,000+ </h1>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="brands-container">
        {brands.map((el, i) => (
          <img key={el.id} src={el.imgSrc} loading="lazy" alt={el.id} />
        ))}
      </div>
    </div>
  );
}
export default Landing;
