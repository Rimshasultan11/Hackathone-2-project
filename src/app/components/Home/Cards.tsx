import React from 'react'
import Image from 'next/image';

const Cards = ({pic,description,tittle}:{pic:any,description:string,tittle:any}) => {
  return (
    <div>
    <div className='w-full xl:w-[305px] h-[462px] hover:bg-[#2A254B] text-[#2A254B]  hover:text-white' >
      <div className='w-full h-[280px]  ' >
      <div> <Image src={pic} alt='cards' className='w-[305px] h-[375px]'/></div>
        <div className='leading-8'>
            <p>{description}</p>
            <p>{tittle}</p>
            
        </div>   
      </div>
      </div>
      
    
        </div>
  
  )
}

export default Cards


