import { Product } from "./types";
import P1 from "/public/P1.webp";
import P2 from "/public/P2.png";
import P3 from "/public/P3.png";

export const Products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 201,
    category: "female",
    image: P1,
  },
  {
    id: 2,
    name: "Product 2",
    price: 202,
    category: "female",
    image: P2,
  },
  {
    id: 3,
    name: "Product 3",
    price: 203,
    category: "female",
    image: P3,
  },
  {
    id: 4,
    name: "Product 4",
    price: 204,
    category: "male",
    image: P1,
  },
  {
    id: 5,
    name: "Product 5",
    price: 205,
    category: "male",
    image: P2,
  },
  {
    id: 6,
    name: "Product 6",
    price: 206,
    category: "kids",
    image: P3,
  },
  {
    id: 7,
    name: "Product 7",
    price: 207,
    category: "kids",
    image: P3,
  },
];
