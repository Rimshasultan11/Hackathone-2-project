"use client"
import React, { useEffect, useState } from "react";
import Cards from "../../Home/Cards";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const ProCards: React.FC = () => {
  const [data, setData] = useState<Product[]>([]); // State to store products
  const [loading, setLoading] = useState<boolean>(true); // State to handle loading

  useEffect(() => {
    const fetchData = async () => {
      const url = `*[_type == 'product' ][0..23]{
        _id, 
        name,
        price,
        "imageUrl":image.asset->url,
      }`;
      try {
        const result: Product[] = await client.fetch(url);
        setData(result); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>; // Loading indicator

  return (
    <div>
      <div className="wrapper grid grid-cols-2 lg:grid-cols-4 gap-6">
  {data.map((item) => (
    <Link
    // Adding a unique key here
    key={item._id}
      href={`/components/AllProduct/productcards/${item._id}`}
    >
      <Cards
       
        pic={item.imageUrl}
        description={item.name}
        tittle={`£${item.price}`}
      />
      
    </Link>
  ))}
</div>

      <button className="text-[#2A254B] text-[16px] w-[170px] h-[56px] py-[16px] px-[32px] my-8 bg-[#F9F9F9] lg:mx-[550px]">
        View All
      </button>
    </div>
  );
};

export default ProCards;
