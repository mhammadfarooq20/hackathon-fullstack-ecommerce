import React from "react";
import Image from "next/image";
import P1 from "/public/P1.webp";
import P2 from "/public/P2.png";
import P3 from "/public/hero-img.webp";
import ProductCard from "@/components/ProductCard";
import { Products } from "@/utils/mock";

const ProductList = () => {
  const productschecks = Products.slice(0, 7);

  return (
    <>
    <div className="flex  flex-col items-center ">
    <h6 className="text-blue-700 font-bold  text-xs pb-3 ">PRODUCTS</h6>
    <h1 className="text-black font-bold text-4xl mt-2">Check What We Have</h1>
    </div>
    
    <div className="flex  flex-wrap justify-evenly mt-16 py-9">
      {productschecks.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          img={P1}
          />
      ))}

   
    </div>
    </>
  );
};

export default ProductList;