"use clint";
import React, { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import ProductContext from "@/app/context/ProductContext";
import Image from "next/image";
const Search = () => {
  const products: {
    name: string;
    _id: string;
    price: number;
    imageUrl: string;
  }[] = useContext(ProductContext); // Access global products
  const [filteredProducts, setFilteredProducts] = useState<
    { name: string; _id: string; price: number; imageUrl: string }[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (event: { target: { value: string } }) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const results = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(results);
  };

  const handleProductClick = (id: string) => {
    setSearchQuery("");
    router.push(`/components/AllProduct/productcards/${id}`);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="relative group hidden sm:block">
        <FaSearch className="text-gray-500 group-hover:text-[#15387ad5] absolute top-1/2 -translate-y-1/2 right-3" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
          className="w-[200px] group-hover:w-[300px] transition-all duration-300 px-2 py-1 rounded-full focus:border-2 focus:outline-none focus:border-[#1c157ac2]"
        />
      </div>

      {/* Filtered Products */}
      {searchQuery && (
        <div className="absolute bg-[#2A254B] shadow-md p-4 rounded-lg mt-10">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="p-2 cursor-pointer hover:bg-gray-100 text-white hover:text-black"
              onClick={() => handleProductClick(product._id)} // Navigate on click
            >
              <div className="flex  items-center gap-4">
                <div>{product.name}</div>
                <div>{product.price}</div>
                <div>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="w-10 h-10 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
