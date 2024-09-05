import pt1 from "../assets/pt1.png";
import pt2 from "../assets/pt2.png";
import pt3 from "../assets/pt3.png";
import pt4 from "../assets/pt4.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import cat1 from "../assets/cat1.png";
import cat2 from "../assets/cat2.png";
import cat3 from "../assets/cat3.png";
import cat4 from "../assets/cat4.png";
const newArrivals = [
  {
    name: "T-SHIRT WITH TAPE DETAILS",
    rating: "4.5/5",
    originalPrice: "$150",
    discountedPrice: "$120",
    discountPercentage: " 20%",
    imageUrl: p1,
  },
  {
    name: "SLEEVELESS HOODIE",
    rating: "4.7/5",
    originalPrice: "$95",
    discountedPrice: null,
    discountPercentage: null,
    imageUrl: p2,
  },
  {
    name: "RIPPED DENIM JACKET",
    rating: "4.8/5",
    originalPrice: "$170",
    discountedPrice: "$150",
    discountPercentage: "10%",
    imageUrl: p3,
  },
  {
    name: "CASUAL LEATHER SHOES",
    rating: "4.6/5",
    originalPrice: "$180",
    discountedPrice: null,
    discountPercentage: null,
    imageUrl: p4,
  },
];
const topSelling = [
  {
    name: "CLASSIC WHITE SNEAKERS",
    rating: "4.9/5",
    originalPrice: "$250",
    discountedPrice: "$200",
    discountPercentage: "15%",
    imageUrl: pt1,
  },
  {
    name: "GRAPHIC PRINT T-SHIRT",
    rating: "4.7/5",
    originalPrice: "$80",
    discountedPrice: null,
    discountPercentage: null,
    imageUrl: pt2,
  },
  {
    name: "CHECKERED FLANNEL SHIRT",
    rating: "4.6/5",
    originalPrice: "$130",
    discountedPrice: "$110",
    discountPercentage: null,
    imageUrl: pt3,
  },
  {
    name: "LEATHER BACKPACK",
    rating: "4.8/5",
    originalPrice: "$250",
    discountedPrice: null,
    discountPercentage: null,
    imageUrl: pt4,
  },
];

const styles = [
  { name: "Casual", image: cat1 },
  { name: "Formal", image: cat2 },
  { name: "Party", image: cat3 },
  { name: "Gym", image: cat4 },
];
const customerReviews = [
  {
    name: "Alice Johnson",
    rating: 5,
    review:
      "Absolutely love this app! The interface is clean, and it's so easy to navigate. Found everything I needed within minutes.",
    verified: true,
  },
  {
    name: "Michael Smith",
    rating: 4,
    review:
      "Great selection of products and fast delivery. The only thing I'd suggest is improving the search filters.",
    verified: true,
  },
  {
    name: "Emma Davis",
    rating: 3,
    review:
      "The app is user-friendly, but my order took a bit longer to arrive. Customer service was helpful though.",
    verified: false,
  },
  {
    name: "John Williams",
    rating: 5,
    review:
      "Fantastic experience! The discounts and offers are really good, and the delivery is always on time.",
    verified: true,
  },
  {
    name: "Sophia Martinez",
    rating: 4,
    review:
      "Overall, a good app with a wide range of products. I wish there were more detailed product descriptions.",
    verified: false,
  },
  {
    name: "James Brown",
    rating: 2,
    review:
      "App is easy to use, but the product quality didn't meet my expectations. Return process was a hassle.",
    verified: true,
  },
  {
    name: "Isabella Wilson",
    rating: 5,
    review:
      "Best shopping app ever! I’ve never had any issues, and the customer service is exceptional.",
    verified: true,
  },
  {
    name: "Liam Taylor",
    rating: 4,
    review:
      "Good app with nice features. Adding a wishlist functionality would make it perfect.",
    verified: false,
  },
];
const siteSections = [
  {
    title: "Company",
    children: ["About", "Features", "Works", "Career"],
  },
  {
    title: "Help",
    children: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "FAQ",
    children: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    title: "Resources",
    children: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
];

export { newArrivals, topSelling, styles, customerReviews, siteSections };
