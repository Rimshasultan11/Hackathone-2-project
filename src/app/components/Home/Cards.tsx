import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Cards = ({pic,description,tittle,id}:{pic?:any,description?:string,tittle?:string,id?:number,onClick?: () => void}) => {
  return (
    <div>
    <div className='w-full xl:w-[305px] h-[462px] '>
      <div className='w-full h-[280px]  bg-[#F5F5F5] '>
      <div> <Image src={pic} alt='cards' className='w-[305px] h-[375px]'/></div>
        <div className='text-[#2A254B] leading-8'>
            <p>{description}</p>
            <p>{tittle}</p>
            
        </div>   
      </div>
      </div>
      
    
        </div>
  
  )
}

export default Cards


