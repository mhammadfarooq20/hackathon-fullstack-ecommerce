import ProductCard from '@/components/ProductCard'
import { Products } from '@/utils/mock'
import { StaticImageData } from 'next/image'
import React from 'react'

const AllProducts = () => {
  return (
    <div className="flex  flex-wrap justify-evenly mt-16 py-9">
    {Products.map((product) => (
      <ProductCard
        key={product.id}
        title={product.name}
        price={product.price}
        img={product.image as StaticImageData}
        category={product.category}
        />
    ))}

 
  </div>
  )
}

export default AllProducts