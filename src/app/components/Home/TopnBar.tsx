import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
const TopnBar = () => {
  return (
    <div>
      <div className='w-full  flex gap-2 items-center justify-between text-[14px] h-[41px] bg-[#2A254B] lg:py-[11px] lg:text-center text-[#FFFFFF]'>
      <div className='flex items-center lg:ml-[500px]'><TbTruckDelivery  className='text-lg'/>Free delivery on all orders over £50 with code easter checkout</div>
      <div className='lg:mr-[59px]'>
      <IoCloseOutline className='text-lg' />
      </div>
      </div>

    </div>
  )
}

export default TopnBar
