import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";
import ProductCard from "@/components/ProductCard";

const getProductsByCategory = (category: string) => {
  return Products.filter((product) => product.category === category);
};

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductsByCategory(params.slug);
  return (
    <div className="flex  flex-wrap justify-evenly mt-16 py-9">
      {result.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          img={product.image as StaticImageData}
          category={product.category}
        />
      ))}
    </div>
  );
}
