import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
// import AddToCart from"./AddToCart"

function ProductCard(props: {
  title: string;
  price: number;
  img: StaticImageData;
  category: string
}) {
  return (
    <>
      <div className="py-5">
        <Image src={props.img} alt="product" />
        <h3 className="font-bold text-lg mt-3">{props.title}</h3>
        <p className="font-bold text-lg">${props.price}</p>
        <p className="font-bold text-lg">Category
        <span className="text-base font-normal capitalize" > {props.category}</span>
        </p>
        {/* <AddToCart/> */}
      </div>
    </>
  );
}

export default ProductCard;
