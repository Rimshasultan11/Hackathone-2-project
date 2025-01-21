"use client";
import Image from "next/image";
import Swal from "sweetalert2";

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  features: string[];
  dimensions: {
    width: string;
    height: string;
    depth: string;
  };
}

export default function ProductDetail({ product }: { product: Product }) {
  const addToCart = (product: Product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...cartItems, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    Swal.fire({
      title: "Success!",
      text: "Item added to cart!",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="w-full bg-[#FFFFFF] py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-16 px-6 lg:px-16">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={300}
            height={300}
            className="w-full max-w-[390px] lg:max-w-[721px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Product Title and Price */}
          <div>
            <p className="text-[#2A254B] mb-4 text-xl lg:text-4xl mt-4 lg:mt-0">
              {product.name}
            </p>
            <p className="text-[#12131A] text-lg lg:text-2xl">
              £{product.price}
            </p>
          </div>

          {/* Description Section */}
          <div className="mt-6 lg:mt-10 flex flex-col gap-5">
            <p className="text-[#2A254B] text-lg">Description</p>
            <p className="text-[#505977] text-base">{product.description}</p>

            <ul className="list-disc pl-6 text-[#505977] text-base">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Dimensions Section */}
          <div className="flex flex-col gap-4 mt-8">
            <p className="text-[#2A254B] text-lg">Dimensions</p>
            <div className="flex flex-col text-base text-[#505977]">
              <ul className="flex items-center gap-8">
                <li className="flex flex-col gap-2">
                  <span>Width</span> {product.dimensions.width}
                </li>
                <li className="flex flex-col gap-2">
                  <span>Height</span> {product.dimensions.height}
                </li>
                <li className="flex flex-col gap-2">
                  <span>Depth</span> {product.dimensions.depth}
                </li>
              </ul>
            </div>
          </div>

          {/* Add to Cart Section */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-4 items-center text-[#2A254B]">
              <p>Amount</p>
              <p>1</p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="bg-[#2A254B] text-white py-3 px-6 text-sm lg:text-base"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
