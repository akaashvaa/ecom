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
    id: "A73",
    name: "T-SHIRT WITH TAPE DETAILS",
    rating: "4.5/5",
    originalPrice: "$150",
    discountedPrice: "$120",
    discountPercentage: "20%",
    imageUrl: p1,
  },
  {
    id: "B76",
    name: "SLEEVELESS HOODIE",
    rating: "4.7/5",
    originalPrice: "$95",
    discountedPrice: null,
    discountPercentage: null,
    imageUrl: p2,
  },
  {
    id: "C79",
    name: "RIPPED DENIM JACKET",
    rating: "4.8/5",
    originalPrice: "$170",
    discountedPrice: "$150",
    discountPercentage: "10%",
    imageUrl: p3,
  },
  {
    id: "D82",
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
    id: "E85",
    name: "CLASSIC WHITE SNEAKERS",
    rating: "4.9/5",
    originalPrice: "$250",
    discountedPrice: "$200",
    discountPercentage: "15%",
    imageUrl: pt1,
  },
  {
    id: "F88",
    name: "GRAPHIC PRINT T-SHIRT",
    rating: "4.7/5",
    originalPrice: "$80",
    discountedPrice: null,
    discountPercentage: null,
    imageUrl: pt2,
  },
  {
    id: "G91",
    name: "CHECKERED FLANNEL SHIRT",
    rating: "4.6/5",
    originalPrice: "$130",
    discountedPrice: "$110",
    discountPercentage: null,
    imageUrl: pt3,
  },
  {
    id: "H94",
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
const productDetails = [
  {
    id: "A73",
    images: [p1, p1, p1],
    sizes: ["S", "M", "L", "XL"],
    availableColors: ["red", "blue", "black"],
    description:
      "This t-shirt with tape details is crafted from premium cotton fabric, providing both comfort and style. It's perfect for casual outings.",
    categories: ["Men", "T-Shirts"],
  },
  {
    id: "B76",
    images: [p2, p2, p2],
    sizes: ["M", "L"],
    availableColors: ["gray", "black"],
    description:
      "Stay stylish with this sleeveless hoodie, ideal for layering during gym sessions or casual outings. Made from lightweight and breathable material.",
    categories: ["Men", "Hoodies"],
  },
  {
    id: "C79",
    images: [p3, p3, p3],
    sizes: ["S", "M", "L"],
    availableColors: ["blue", "dark green"],
    description:
      "A ripped denim jacket that adds an edge to any outfit. Made from durable denim, it features distressed detailing for a trendy look.",
    categories: ["Men", "Jackets"],
  },
  {
    id: "D82",
    images: [p4, p4, p4],
    sizes: ["8", "9", "10", "11"],
    availableColors: ["brown", "black"],
    description:
      "These casual leather shoes offer a blend of elegance and comfort. Perfect for both formal and casual wear, they are crafted from premium leather.",
    categories: ["Men", "Shoes"],
  },
  {
    id: "E85",
    images: [pt1, pt1, pt1],
    sizes: ["7", "8", "9", "10", "11"],
    availableColors: ["white", "gray"],
    description:
      "Classic white sneakers made from durable materials, perfect for both sports and casual wear. These shoes offer superior cushioning for all-day comfort.",
    categories: ["Men", "Shoes"],
  },
  {
    id: "F88",
    images: [pt2, pt2, pt2],
    sizes: ["S", "M", "L", "XL"],
    availableColors: ["black", "white"],
    description:
      "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    categories: ["Men", "T-Shirts"],
  },
  {
    id: "G91",
    images: [pt3, pt3, pt3],
    sizes: ["M", "L", "XL"],
    availableColors: ["red", "black"],
    description:
      "This checkered flannel shirt is perfect for outdoor adventures or casual wear. Made from soft cotton, it provides warmth and a stylish look.",
    categories: ["Men", "Shirts"],
  },
  {
    id: "H94",
    images: [pt4, pt4, pt4],
    sizes: ["One Size"],
    availableColors: ["brown", "black"],
    description:
      "This leather backpack combines style and functionality. Featuring a spacious interior and sturdy build, it's perfect for travel or everyday use.",
    categories: ["Accessories", "Backpacks"],
  },
];
const productReviews = [
  {
    id: "A73",
    reviews: [
      {
        username: "john_doe",
        rating: "5/5",
        comment: "Great quality and fit! The color options are awesome.",
        date: "2024-09-06",
      },
      {
        username: "jane_smith",
        rating: "4/5",
        comment: "Comfortable to wear but the sizes run a bit large.",
        date: "2024-09-04",
      },
    ],
  },
  {
    id: "B76",
    reviews: [
      {
        username: "sam_adams",
        rating: "4.5/5",
        comment: "Perfect for gym wear, and the material is breathable.",
        date: "2024-08-30",
      },
    ],
  },
  {
    id: "C79",
    reviews: [
      {
        username: "mike_rogers",
        rating: "5/5",
        comment: "Awesome jacket, fits perfectly, and has a cool design.",
        date: "2024-07-25",
      },
      {
        username: "lily_evans",
        rating: "4.8/5",
        comment: "Really love this denim jacket. The quality is top-notch.",
        date: "2024-07-27",
      },
    ],
  },
  {
    id: "D82",
    reviews: [
      {
        username: "alex_miller",
        rating: "4/5",
        comment: "Stylish shoes but a bit tight around the toes.",
        date: "2024-08-05",
      },
    ],
  },
  {
    id: "E85",
    reviews: [
      {
        username: "lucy_liu",
        rating: "5/5",
        comment:
          "Best sneakers I've ever bought! Super comfortable and durable.",
        date: "2024-06-18",
      },
    ],
  },
  {
    id: "F88",
    reviews: [
      {
        username: "jack_brown",
        rating: "4.7/5",
        comment: "Nice print and good quality fabric.",
        date: "2024-07-10",
      },
    ],
  },
  {
    id: "G91",
    reviews: [
      {
        username: "emma_clark",
        rating: "4.6/5",
        comment: "Good flannel shirt, but the fabric feels a bit stiff.",
        date: "2024-06-22",
      },
    ],
  },
  {
    id: "H94",
    reviews: [
      {
        username: "mark_white",
        rating: "4.8/5",
        comment: "This backpack is spacious and durable. A great buy!",
        date: "2024-08-02",
      },
    ],
  },
];

export {
  newArrivals,
  topSelling,
  styles,
  customerReviews,
  siteSections,
  productDetails,
  productReviews,
};
