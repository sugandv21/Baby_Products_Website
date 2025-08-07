// src/data/products.js
import img1 from "../assets/images/Frame 1171275000.png";
import img2 from "../assets/images/Frame 1171275006.png";
import img3 from "../assets/images/Frame 1171275009.png";
import img4 from "../assets/images/Frame 1171275017.png";
import img5 from "../assets/images/Frame 1171275030.png";
import img6 from "../assets/images/image 13 (1) 1.png";

const offersData = [
  {
    id: 1,
    title: "Diaper Combo",
   images: [img1, img3, img2,img3],
    price: 1300,
    mrp: 1850,
    rating: 5,
  },
  {
    id: 2,
    title: "Marcus",
   images: [img2, img3, img2,img3],
    price: 1199,
    mrp: 1466,
    rating: 4,
  },
  {
    id: 3,
    title: "Halemons Floral",
    images: [img3, img1, img2,img3],
    price: 1399,
    mrp: 1466,
    rating: 5,
  },
  {
    id: 4,
    title: "Naturals Soap",
    images: [img4, img3, img2,img3],
    price: 599,
    mrp: 600,
    rating: 5,
  },
  {
    id: 5,
    title: "Lavern",
    images: [img5, img3, img2,img3],
    price: 9399,
    mrp: 10466,
    rating: 5,
  },
  {
    id: 6,
    title: "Philips",
    images: [img6, img3, img2,img3],
    price: 599,
    mrp: 600,
    rating: 5,
  },
];

export default offersData;
