import Link from "next/link";
import logo from "/public/logo.webp";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { Search } from "lucide-react";

const header = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-6 px-8">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-40" />
      </Link>

      <ul className="flex gap-x-3">
        <li className="text-lg">
          <Link href={"/category/females"}>Females</Link>
        </li>
        <li className="text-lg">
          <Link href={"/category/males"}>Males</Link>
        </li>
        <li className="text-lg">
          <Link href={"/category/kids"}>kids</Link>
        </li>
        <li className="text-lg">
          <Link href={"/all-products"}>All Products</Link>
        </li>
      </ul>
      <div className="flex">
        <Search className="bg-white rounded-l" />{" "}
        <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r"
        ></input>
      </div>
      <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
        <Link href={"/cart"}>
          <FiShoppingCart className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default header;
