import { client } from "@/sanity/lib/client";
import Navbar from "@/app/components/Home/Navbar";
import FooterS from "@/app/components/Footer/FooterS";
import Cardsbar from "../Cardsbar";
import Brandes from "@/app/components/Home/Brandes";
import Join from "@/app/components/Home/Join";
import ProductDetail from "../ProductDetail";

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

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const { id } = params;

  // Fetch the product data from Sanity
  const url = `*[_type == 'product' && _id == '${id}']{
    _id, 
    name,
    price,
    "imageUrl": image.asset->url,
    description,
    features,
    dimensions
  }`;

  const filterData: Product[] = await client.fetch(url);
  const product = filterData[0];

  if (!product) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl text-red-500">Product not found</h1>
        <p className="text-blue-500 underline mt-4">
          <a href="/">Go back to Home</a>
        </p>
      </div>
    );
  }

  return (
    <div>
      
      <ProductDetail product={product} />
      <Cardsbar/>
      <Brandes/>
      <Join/>
      <FooterS/>
    </div>
  );
}
