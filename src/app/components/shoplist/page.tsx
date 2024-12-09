import React from 'react'
import Navbar from '../Home/Navbar'
import p3 from '/public/p3.png'
import p8 from '/public/p8.png'
import Image from 'next/image'
import Footer from '../Footer/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#F9F9F9] w-full min-h-screen mt-10">
        <div className="py-8 px-6 md:py-16 md:px-20 lg:px-48">
          <h1 className="text-lg md:text-2xl text-[#2A254B] font-normal tracking-wide">
            Your Shopping Cart
          </h1>
          <div className="mt-6 text-[#2A254B] justify-between flex items-center text-xs md:text-sm">
            <h3>Products</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
          </div>
          <hr className="mt-4" />

          {/* Product List */}
          {[{ id: 1, img: p3, name: "Graystone vase", price: 85 }, { id: 2, img: p8, name: "Graystone vase", price: 125 }].map((product) => (
            <div
              key={product.id}
              className="mt-8 flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-0"
            >
              {/* Product Info */}
              <div className="flex gap-4 w-full md:w-auto">
                <div>
                  <Image src={product.img} alt={product.name} className="w-28 h-32 object-cover" />
                </div>
                <div className="text-[#2A254B] flex flex-col">
                  <h4 className="text-lg font-normal">{product.name}</h4>
                  <p className="text-xs tracking-tight">
                    A timeless ceramic vase with a tri-color grey glaze.
                  </p>
                  <p className="text-sm mt-2">£{product.price}</p>
                </div>
              </div>
              {/* Quantity */}
              <div className="text-center md:text-left w-full md:w-auto">1</div>
              {/* Total */}
              <div className="w-full md:w-auto text-center md:text-left">
                <p>£{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-4 mr-28 items-center lg:items-end my-10'>
          <div className='flex  gap-4 text-[#4E4D93]'>
            <p className='text-[20px] font-[400px]'>Subtotal</p>
            <p className='text-[20px] font-[400px]'>£210</p>
          </div>
          <p className='text-[#4E4D93]'> Taxes and shipping are calculated at checkout</p>
        <button className=' text-[12px] py-[16px] px-[32px] text-[#FFFFFF] bg-[#2A254B] w-[172px] h-[56px]'>go to check out</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page

