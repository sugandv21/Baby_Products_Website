// src/data/products.js
import img1 from "../assets/images/bottle1.png";
import img2 from "../assets/images/bottle2.png";
import img3 from "../assets/images/bottle3.png";
import img4 from "../assets/images/bottle4.png";
import img5 from "../assets/images/bottle5.png";
import img6 from "../assets/images/bottle6.png";

const bottleData = [
  {
    id: 601,
    title: "Mee Steele",
   images: [img1, img3, img2,img3],
    price: 399,
    mrp: 466,
    rating: 5,
  },
  {
    id: 602,
    title: "LuvLap",
   images: [img2, img3, img2,img3],
    price: 240,
    mrp: 300,
    rating: 4,
  },
  {
    id: 603,
    title: "Philips",
    images: [img3, img1, img2,img3],
    price: 599,
    mrp: 600,
    rating: 5,
  },
  {
    id: 604,
    title: "Aveta",
    images: [img4, img3, img2,img3],
    price: 250,
    mrp: 300,
    rating: 5,
  },
  {
    id: 605,
    title: "Chicco",
    images: [img5, img3, img2,img3],
    price: 400,
    mrp: 499,
    rating: 5,
  },
  {
    id: 606,
    title: "Small Wonder",
    images: [img6, img3, img2,img3],
    price: 399,
    mrp: 480,
    rating: 5,
  },
];

export default bottleData;
