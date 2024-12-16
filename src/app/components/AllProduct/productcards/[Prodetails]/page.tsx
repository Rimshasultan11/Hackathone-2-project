import Navsecond from "@/app/components/Home/Navsecond";

import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import p1 from '/public/p1.png'
import p2 from '/public/p2.png'
import p3 from '/public/p3.png'
import p4 from '/public/p4.png'
import p10 from '/public/p10.png'
import p11 from '/public/p11.png'
import p12 from '/public/p12.png'
import p13 from '/public/p13.png'
interface Product {
  id: number;
  img:any;
  des: string;
  price: string;
}
 const productList:Product[]=[

  {
    id:1,
    img:p1,
    des:'The dany chair',
    price:"£250"
  },
  
  {
    id:2,
    img:p2,
    des:'Rustic Vase Set',
    price:"£155"
  },
  
  {
    id:3,
    img:p3,
    des:'The Silky Vase',
    price:"£125"
  },
  {
    id:4,
    img:p4,
    des:'The Lucy Lamp',
    price:"£399"
  },
  {
    id:5,
    img:p10,
    des:'The dany chair',
    price:"£250"
  },
  
  {
    id:6,
    img:p11,
   des:'Rustic Vase Set',
    price:"£155"
  },
  
  {
    id:7,
    img:p12,
   des:'The Silky Vase',
    price:"£125"
  },
  {
    id:8,
    img:p13,
    des:'The Lucy Lamp',
    price:"£399"
  },
  {
    id:9,
    img:p1,
    des:'The dany chair',
    price:"£250"
  },
  
  {
    id:10,
    img:p2,
    des:'Rustic Vase Set',
    price:"£155"
  },
  
  {
    id:11,
    img:p3,
    des:'The Silky Vase',
    price:"£125"
  },
  {
    id:12,
    img:p4,
    des:'The Lucy Lamp',
    price:"£399"
  }
];
export default  function ProductDetails ({params}:{params:{Prodetails:string}}) {

const data =  productList 

const filterData = data.find((item:any)=>
  item.id ==  params.Prodetails
);

  return (
    <div>
      <Navsecond/>
    
      <h1 className='text-center text-7xl font-bold text-[#2A254B]'>Product Details</h1>
      <div className=" w-full wrapper flex max-sm:flex-col md:flex-row gap-8 my-[100px]" key={filterData?.id}>
<div className="shadow-lg shadow-gray-400 rounded-lg w-[500px] ">
  <Image src={filterData?.img  || "/anyimage.jpg" } alt="image" width={500} height={300} className="rounded-lg"/>
  </div>
  <div className="w-[600px] py-10  text-[#2A254B]">
<div className="text-7xl">{filterData?.des}</div>
<div className="text-lg mt-10">
  <span className="text-sm my-4">Description:</span><br />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nesciunt? Esse tempora ex eveniet quia eum nesciunt. Culpa, quia omnis. Provident in, quia veniam commodi earum ullam enim ut unde</p></div>
<div className="text-4xl mt-10">Price:{filterData?.price}</div>
<div className="mt-10">
<button className='bg-[#2A254B] w-[190px] h-[56px] text-[16px]  py-[16px] px-[32px]  flex gap-2 items-center text-[#FFFFFF] '>Add to Cart <AiOutlineShoppingCart /></button>
</div>
</div>
    </div></div>
  )
}





