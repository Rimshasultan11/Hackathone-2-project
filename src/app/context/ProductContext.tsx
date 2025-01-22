"use client"
import React, { createContext, useState, useEffect } from 'react';
import sanityClient from '@sanity/client';

const NEXT_PUBLIC_SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const ProductContext = createContext([]);

import { ReactNode } from 'react';

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sanityClient({
      projectId:NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
      dataset: 'production',
      useCdn: true,
    })
      .fetch(`*[_type == "product"]{ _id, name, price, "imageUrl":image.asset->url}`)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
